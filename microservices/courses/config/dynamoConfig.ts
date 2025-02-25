import dynamoose from "dynamoose";

const isLocal = process.env.NODE_ENV === "development";

// Create new DynamoDB instance
const ddb =  new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
      "accessKeyId": "AKID",
      "secretAccessKey": "SECRET"
    },
    "region": process.env.AWS_REGION ?? "us-east-1"
  }) 
  
  dynamoose.aws.ddb.local();
// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);
console.log(`DynamoDB connected to ${isLocal ? "local instance" : "AWS"}`);

export default ddb;