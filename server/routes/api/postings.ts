import express from 'express';
import { Db, ObjectID } from 'mongodb';

// const pipline = require('./agg');

const postingRouter = (db: Db) => {
  const router = express.Router();

  router.get('/byId', async (_, res) => {
    // const findById = (db: Db) => {
    const results = await db
      .collection('marc')
      .aggregate([
        {
          $project: { name: { $toUpper: '$name' }, _id: 0 },
        },
        { $sort: { name: 1 } },
      ])
      .toArray();

    res.send(results);
    // };
  });

  router.post('/create', (req, res) => {
    const { user } = req.query;

    const test = db.collection(user);

    test
      .insertOne(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.get('/companies', (req, res) => {
    const { user } = req.query;

    const collection = db.collection(user);

    collection
      .aggregate(pipline)
      .toArray()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.get('/company', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .findOne(new ObjectID(_id))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.put('/update', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .findOneAndUpdate(new ObjectID(_id), req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.put('/update/stage', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .updateOne(new ObjectID(_id), { $push: {} })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};

export default postingRouter;
