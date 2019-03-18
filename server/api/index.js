const express = require('express');
const pipline = require('./agg');

module.exports = (client) => {
  const router = express.Router();

  router.post('/resumes/create', (req, res) => {
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

  router.get('/resumes/companies', (req, res) => {
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

  return router;
};
