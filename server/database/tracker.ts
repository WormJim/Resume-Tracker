import { Db, ObjectID } from 'mongodb';
import { JobSearchRow } from 'server/database';

const collection = 'tracker';

const findById = (db: Db) => {
  db.collection('marc').aggregate([
    { $project: { name: { $toUpper: '$name' }, _id: 0 } },
    { $sort: { name } },
  ]);
};

export const createTrackerRow = async (db: Db, user: string, data: JobSearchRow) => {
  const result = await db.collection(user).insertOne(data);

  return result;
};

export const deleteTrackerRow = async (db: Db, user: string, id: ObjectID) => {
  const result = await db.collection(user).deleteOne(id);

  return result;
};

export const readTrackerRow = async (db: Db, user: string, id: ObjectID) => {
  const result = await db
    .collection(user)
    .find()
    .toArray();

  return result;
};

export const updateTrackerRow = async (db: Db, user: string, findData: {}, data: {}) => {
  const result = await db.collection(user).findOneAndUpdate(findData, data);

  return result;
};
