import express from 'express';

// const pipline = require('./agg');

export default async function apiRouter(dbClient: any) {
  const router = express.Router();

  const short = await new Promise((resolve, reject) => (true ? resolve('s') : reject(new Error())));

  console.info(short);

  router.use('/users');
  router.use('/tracker');

  return router;
}
