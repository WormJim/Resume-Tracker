require('dotenv').config();

module.exports = {
  base: process.env.DB_BASE,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  host: process.env.DB_HOST
};
