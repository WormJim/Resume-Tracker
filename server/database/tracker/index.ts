import { Db, ObjectID } from 'mongodb';
import { JobSearchRow } from 'server/database';

export const createTrackerRow = async (db: Db, user: string, data: JobSearchRow) => {
  const result = await db.collection(user).insertOne(data);

  return result;
};
