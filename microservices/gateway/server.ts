import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import proxy from 'express-http-proxy';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use('/courses',proxy('http://localhost:5002'));
app.use('/finance',proxy('http://localhost:5003'));
app.use('/',proxy('http://localhost:5001'));

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})