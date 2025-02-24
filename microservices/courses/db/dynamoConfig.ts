import * as AWS from "aws-sdk";
import dynamoose from "dynamoose";

const isLocal = process.env.NODE_ENV === "development";

const dynamoDBConfig = isLocal
  ? {
      region: "us-east-1",
      endpoint: "http://localhost:8000",
      accessKeyId: "fakeAccessKey", // Fake credentials for local DynamoDB
      secretAccessKey: "fakeSecretKey",
    }
  : {
      region: process.env.AWS_REGION,
    };

// Create a new instance of DynamoDB
const ddb = new AWS.DynamoDB(dynamoDBConfig);

// Attach the custom instance to Dynamoose
dynamoose.aws.ddb.set(ddb);

console.log(`DynamoDB connected to ${isLocal ? "local instance" : "AWS"}`);
