// import express from 'express';
// import { ObjectID } from 'mongodb';

// // const pipline = require('./agg');

// export default async function apiRouter(dbClient: any) {
//   const router = express.Router();

//   router.post('/posting/create', (req, res) => {
//     const { user } = req.query;

//     const test = dbClient.collection(user);

//     test
//       .insertOne(req.body)
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   router.get('/posting/companies', (req, res) => {
//     const { user } = req.query;

//     const collection = dbClient.collection(user);

//     collection
//       .aggregate(pipline)
//       .toArray()
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   router.get('/posting/company', (req, res) => {
//     const { user } = req.query;
//     const { _id } = req.body;

//     const collection = dbClient.collection(user);

//     collection
//       .findOne(ObjectID(_id))
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   router.put('/posting/update', (req, res) => {
//     const { user } = req.query;
//     const { _id } = req.body;

//     const collection = dbClient.collection(user);

//     collection
//       .findOneAndUpdate(ObjectID(_id), req.body)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   router.put('/posting/update/stage', (req, res) => {
//     const { user } = req.query;
//     const { _id } = req.body;

//     const collection = dbClient.collection(user);

//     collection
//       .updateOne(ObjectID(_id), { $push: {} })
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   });

//   return router;
// }
