import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import moment from 'moment';
import { initialize, JobSearchRow } from 'server/database';

const server = express();

dotenv.config();

// import apiRouter from 'server/routes/api';

(async () => {
  const { tracker } = await initialize();

  server.use(express.static(path.join(__dirname, '../public')));
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());

  server.use('/data', async (_, res) => {
    const input: JobSearchRow = {
      DateAdded: moment().toDate(),
      Company: 'Fake',
      Position: 'Fake Position',
      Motivation: 1,
      Connection: 'Engineer',
      ConnectionName: 'Fake Person',
      Messaged: 'false',
      DateApplied: moment().toDate(),
      Applied: 'false',
      InitialInterview: 'Pending',
      OnsiteInterview: 'Pending',
      Offer: 'Pending',
    };

    const trackerResult = await tracker.collection('marc').insertOne(input);

    // const result = await tracker
    //   .collection('marc')
    //   .find({})
    //   .toArray();

    res.send(trackerResult);
  });

  server.use('/', (_, res) => {
    res.send('Hello');
  });

  server.use('*', (_, res) => {
    res.sendFile('../public');
  });

  server.listen(process.env.PORT, () => {
    console.info(`Listening on Port ${process.env.PORT}`);
  });
})();
