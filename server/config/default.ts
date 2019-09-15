import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: 5050,
  DATABASE: {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASS: process.env.PASS,
    BASE: process.env.BASE,
  },
};
