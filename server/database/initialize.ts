import dotenv from 'dotenv';
import { MongoClient, Db } from 'mongodb';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const initialize = async (): Promise<{ connection: MongoClient; tracker: Db }> => {
  try {
    const connection = await client.connect();

    console.info('DB Started');

    return {
      connection,
      tracker: connection.db('tracker'),
    };
  } catch (error) {
    console.error('DB Failed');
    console.error(error);

    throw error;
  }
};

export default initialize;
