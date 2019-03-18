const path = require('path');
const express = require('express');
const Mongo = require('./db');
const server = express();

Mongo((client) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  server.use(express.static(path.join(__dirname, '../public')));

  server.use('/api', (req, res) => {
    const { user } = req.query;

    const test = client.collection(user);

    test.insertOne({ test: 'test' }, (e, r) => {});

    res.send({ API: 'API' });
  });

  server.listen(3000, () => {
    console.log('Listening On Port ', 3000);
  });
});
