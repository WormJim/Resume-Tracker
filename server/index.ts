import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import moment from 'moment';
import { initialize, JobSearchRow } from 'server/database';
import apiRouter from 'server/routes/api';

const server = express();

dotenv.config();

// import apiRouter from 'server/routes/api';

(async () => {
  const { tracker } = await initialize();

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
    await apiRouter(tracker),
  );

  server.use('*', (_, res) => {
    res.sendFile('../public');
  });

  server.listen(process.env.PORT, () => {
    console.info(`Listening on Port ${process.env.PORT}`);
  });
})();
