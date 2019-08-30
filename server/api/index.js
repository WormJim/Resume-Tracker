const express = require('express');
const pipline = require('./agg');
const { ObjectID } = require('mongodb');

module.exports = (client) => {
  const router = express.Router();

  router.post('/posting/create', (req, res) => {
    const { user } = req.query;

    const test = client.collection(user);

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

    const collection = client.collection(user);

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

    const collection = client.collection(user);

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

    const collection = client.collection(user);

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

    const collection = client.collection(user);

    collection
      .updateOne(ObjectID(_id), { $push: {} })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  return router;
};
