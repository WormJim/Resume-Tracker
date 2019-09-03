import express from 'express';
import { Db, ObjectID } from 'mongodb';

const postingRouter = (db: Db) => {
  const router = express.Router();

  router.post('/posting/create', (req, res) => {
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

  router.get('/posting/companies', (req, res) => {
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

  router.get('/posting/company', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .findOne(ObjectID(_id))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.put('/posting/update', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .findOneAndUpdate(ObjectID(_id), req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.put('/posting/update/stage', (req, res) => {
    const { user } = req.query;
    const { _id } = req.body;

    const collection = db.collection(user);

    collection
      .updateOne(ObjectID(_id), { $push: {} })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
};

export default postingRouter;
