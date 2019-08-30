const config = require('./config');
const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${config.user}:${config.pass}@${config.host}/${
  config.base
}?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = (cb) => {
  client.connect((err) => {
    if (err)
      client.close().then(() => {
        console.log('Error Connecting to DB', err);
      });
    else {
      cb(client.db('tracker'));
    }
  });
};
