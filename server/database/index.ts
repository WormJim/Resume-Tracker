import config from 'config';
import { MongoClient } from 'mongodb';

const dbConfig = config.get<{ USER: string; PASS: string; HOST: string; BASE: string }>('DATABASE');

const uri = `mongodb+srv://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.HOST}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const initialize = async () => {
  try {
    const connection = await client.connect();

    return {
      connection,
      db: connection.db('tracker'),
    };
  } catch (error) {
    return error;
  }

  // client.close().then(() => {
  //   // console.log('Error Connecting to DB', err);
  // });
};

export default initialize;
