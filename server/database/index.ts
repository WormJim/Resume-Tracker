import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const initialize = async () => {
  try {
    const connection = await client.connect();

    console.info('DB Started');

    return {
      connection,
      db: connection.db('tracker'),
    };
  } catch (error) {
    console.error('DB Failed');
    console.error(error);

    return error;
  }
};

export default initialize;
