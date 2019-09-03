import { MongoClient, Db } from 'mongodb';

export type accountStatus = 'Disabled' | 'Enabled' | 'Pending' | 'Unknown';

export type motivation = 0 | 1 | 2 | 3;
export type Motivation = motivation;

export type connection = 'HRGrad' | 'Recruiter' | 'Engineer' | 'Other' | 'Existing Connection';
export type Connection = connection;

export type trueOrFalse = 'true' | 'false';
export type TrueOrFale = trueOrFalse;

export type interviewStatus =
  | 'Pending'
  | 'Scheduled'
  | 'Completed'
  | 'No Response'
  | 'Not Booked'
  | 'Rejected';
export type InterviewStatus = interviewStatus;

export type jobOffer = 'Pending' | 'No Offer' | 'Offer' | 'Declined';
export type JobOffer = jobOffer;

export interface JobSearchRow {
  DateAdded: Date;
  Company: string;
  Position: string;
  Motivation: Motivation;
  Connection: Connection;
  ConnectionName: string;
  Messaged: TrueOrFale;
  DateApplied: Date;
  Applied: TrueOrFale;
  InitialInterview: InterviewStatus;
  OnsiteInterview: InterviewStatus;
  Offer: JobOffer;
}

export interface MongoDatabaseObject {
  connection: MongoClient;
  tracker: Db;
}

export declare function initialize(): Promise<MongoDatabaseObject>;
