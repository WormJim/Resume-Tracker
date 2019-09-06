import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { initialize } from 'server/database';
import apiRouter from 'server/routes/api';

const server = express();

dotenv.config();

(async () => {
  const { rtDB } = await initialize();

  server.use(express.static(path.join(__dirname, '../public')));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.use(
    '/api',
    (req, res, next) => {
      if (req) {
        return next();
      } else if (res) {
        return next();
      }

      return next();
    },
    await apiRouter(rtDB),
  );

  server.use('*', (_, res) => {
    res.sendFile('../public');
  });

  server.listen(process.env.PORT, () => {
    console.info(`Listening on Port ${process.env.PORT}`);
  });
})();
