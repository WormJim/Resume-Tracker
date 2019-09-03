import express from 'express';
import { Db } from 'mongodb';
import postingRouter from 'server/routes/api/postings';

export default async function apiRouter(db: Db) {
  const router = express.Router();

  const short = await new Promise((resolve, reject) => (true ? resolve('s') : reject(new Error())));

  console.info(short);

  router.use('/users');
  router.use('/posting', postingRouter(db));

  return router;
}
