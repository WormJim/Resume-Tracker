// import path from 'path';
// import Mongo from 'mongodb';
import express from 'express';
// import apiRouter from 'server/routes/api';

const server = express();

server.listen(5000, () => {
  console.log('Listening on Port 5000');
});

server.use('/', (req, res) => {
  res.send('Hello');
});

// Mongo((client) => {
//   server.use(express.json());
//   server.use(express.urlencoded({ extended: false }));

//   server.use(express.static(path.join(__dirname, '../public')));

//   server.use('/api', apiRouter(client));

//   server.use('*', (req, res) => {
//     res.sendFile('../public');
//   });

//   server.listen(3000, () => {
//     console.log('Listening On Port ', 3000);
//   });
// });
