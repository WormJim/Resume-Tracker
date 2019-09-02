import { user, pass, host, base } from './config';
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${user}:${pass}@${host}/${base}?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });

export default (cb) => {
  client.connect((err) => {
    if (err) {
      client.close().then(() => {
        console.info('Error Connecting to DB', err);
      });
    } else {
      cb(client.db('tracker'));
    }
  });
};
