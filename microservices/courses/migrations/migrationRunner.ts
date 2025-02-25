import ddb from "../config/dynamoConfig";
import { Course } from "../models/Course";

async function runMigrations() {

    console.log("Running migrations...");
    await ddb.createTable(Course);

    console.log("Migrations completed successfully.");
}