import express from 'express';
import postingRouter from 'server/routes/api/postings';
import { Db } from 'mongodb';

// const pipline = require('./agg');

export default async function apiRouter(db: Db) {
  const router = express.Router();

  const short = await new Promise((resolve, reject) => (true ? resolve('s') : reject(new Error())));

  console.info(short);

  router.use('/users');
  router.use('/posting', postingRouter(db));

  return router;
}
