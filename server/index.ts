import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import initialize from 'server/database';

const server = express();

dotenv.config();

// import apiRouter from 'server/routes/api';

(async () => {
  const { db } = await initialize();

  server.use(express.static(path.join(__dirname, '../public')));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.use('/data', async (_, res) => {
    const result = await db
      .collection('marc')
      .find({})
      .toArray();

    res.send(result);
  });

  server.use('/', (_, res) => {
    res.send('Hello');
  });

  server.use('*', (_, res) => {
    res.sendFile('../public');
  });

  server.listen(process.env.PORT, () => {
    console.info(`Listening on Port ${process.env.PORT}`);
  });
})();
