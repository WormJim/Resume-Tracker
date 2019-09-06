import { Db, MongoClient } from 'mongodb';

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

export interface MongoDatabaseObject {
  connection: MongoClient;
  tracker: Db;
}

export declare function initialize(): Promise<MongoDatabaseObject>;

export interface Modified {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface UsersCollection {
  firstName: string;
  lastName: string;
  displayName: string;
  address: Addresses[];
  email: {
    main: string;
    others: string[];
  };
  phoneNumber: {
    main: string;
    others: string[];
  };
  userName: string;
  joinedDate: Date;
}

export interface Addresses extends Modified {
  id: number;
  streetLine1: string;
  streetLine2: string;
  city: string;
  state: string;
  postalCode: string;
  isPrimary: boolean;
  userId: string;
}

export type addresses = Addresses;
export type Address = PartialWithKeys<
  Addresses,
  'createdAt' | 'updatedAt' | 'deletedAt' | 'id' | 'userId'
>;

export interface PostingCollection extends Modified {
  listingId: string;
  position: string;
  motivation: Motivation;
  connection: Connection;
  connectionName: string;
  messaged: TrueOrFale;
  dateApplied: Date;
  applied: TrueOrFale;
  initialInterview: InterviewStatus;
  onsiteInterview: InterviewStatus;
  offer: JobOffer;
}

export interface ListingCollection extends Modified {
  companyName: string;
  headquarters: string;
  id: number;
  industry: string;
  listingId: string;
  location: string;
  position: string;
  rating: number;
  responsibilities: string;
  requirements: string;
  salaryOffer: string;
  salaryRange: string;
  source: string;
  sourceUri: string;
  userId: string;
  webUri: string;
}

export type ListingDocument = ListingCollection;
export type ListingInsert = PartialWithKeys<ListingDocument, 'id' | 'createdAt' | 'updatedAt'>;

export interface UserEmail extends Modified {
  id: number;
  email: string;
  isPrimary: boolean;
  userId: number;
}

export type UserEmailRow = UserEmail;
export type UserEmailRowInsert = PartialWithKeys<UserEmailRow, 'id' | 'createdAt' | 'updatedAt'>;
