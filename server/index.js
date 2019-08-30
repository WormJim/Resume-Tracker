const path = require('path');
const Mongo = require('./db');
const express = require('express');
const server = express();
const router = require('./api');

Mongo((client) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));

  server.use(express.static(path.join(__dirname, '../public')));

  server.use('/api', router(client));

  server.use('*', (req, res) => {
    res.sendFile('../public');
  });

  server.listen(3000, () => {
    console.log('Listening On Port ', 3000);
  });
});
