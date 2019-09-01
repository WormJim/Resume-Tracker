import config from 'config';
import express from 'express';
import initialize from 'server/database';
import path from 'path';
const server = express();

// import apiRouter from 'server/routes/api';

(async () => {
  const PORT = config.get('PORT');

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

  server.listen(PORT, () => {
    console.info(`Listening on Port ${PORT}`);
  });
})();

// Mongo((client) => {

//   server.use('/api', apiRouter(client));

// });
