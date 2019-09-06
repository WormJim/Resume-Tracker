import express from 'express';
import { Db } from 'mongodb';
import postingRouter from 'server/routes/api/postings';
import moment from 'moment';

export default async function apiRouter(db: Db) {
  const router = express.Router();

  const short = await new Promise((resolve, reject) => (true ? resolve('s') : reject(new Error())));

  // router.use('/users');

  router.get('/', async (req, res, next) => {
    const userResult = await db.collection('users').insertOne({
      firstName: 'Grahn',
      lastName: 'Cooledge',
      displayName: 'Grahn Cooledge',
      userId: 'abc123',
      addresses: [
        {
          streetLine1: '7734 Austin Street',
          streetLine2: '1C',
          city: 'Forest Hills',
          state: 'NY',
          zipCode: '11375',
          isPrimary: true,
        },
      ],
      emailAddress: [
        {
          email: 'gcooled29@gmail.com',
          isPrimary: true,
        },
      ],
      phoneNumber: [
        {
          phone: '3474480062',
          isPrimary: true,
        },
      ],
      userName: 'WormJim',
      createdAt: moment().toDate(),
      updatedAt: moment().toDate(),
      deletedAt: null,
    });

    const listingResult = await db.collection('listings').insertOne({
      source: 'glassdoor',
      sourceUri:
        'https://www.glassdoor.com/job-listing/front-end-developer-saggezza-JV_IC1132348_KO0,19_KE20,28.htm?jl=3274601332&ctt=1566427013687',
      webUri: 'https://www.saggezza.com/',
      position: 'Front End Developer',
      companyName: 'Saggezza',
      salaryRange: '85,000 - 128,000',
      salaryOffer: '101,909',
      headquarters: 'Chicago, IL',
      industry: 'IT Services',
      location: 'New York, NY',
      rating: '4.1',
      responsibilities: `Develop new components and features for our frontend applications
      Write, audit, and improve our test coverage
      Document and refactor our frontend codebase
      Profile and improve our frontend performance
      Write about your work and contribute back to open source`,
      requirements: `Bachelor's degree in computer science or a related field.
      2+ years' experience working with a JavaScript framework, preferably React
      In-depth understanding of JavaScript, the DOM, and relevant concepts
      Proficiency with browser based debugging and performance testing
      Understanding of progressive web applications
      Experience with test driven development
      Experience using Git`,
      listingId: 'cba123',
      userId: 'abc123',
      createdAt: moment().toDate(),
      updatedAt: moment().toDate(),
      deletedAt: null,
    });

    const postingResult = await db.collection('postings').insertOne({
      userId: 'abc123',
      listingId: 'cba123',
      postingId: '123abc',
      applied: false,
      dateApplied: null,
      connection: 'Other',
      connectionName: null,
      messaged: null,
      initialInterview: 'Pending',
      onsiteInterview: 'Pending',
      offer: 'Pending',
      createdAt: moment().toDate(),
      updatedAt: moment().toDate(),
      deletedAt: null,
    });

    res.send('done');
  });

  router.use('/posting', postingRouter(db));

  return router;
}
