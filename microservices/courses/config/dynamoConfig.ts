import { DynamoDB } from '@aws-sdk/client-dynamodb';
import * as dynamoose from 'dynamoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const setupDynamoDB = () => {
  if (process.env.NODE_ENV === 'development') {
    dynamoose.aws.ddb.local("http://localhost:8000");
  } else {
    const client = new DynamoDB({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
    dynamoose.aws.ddb.set(client);
  }
};

export default setupDynamoDB;
