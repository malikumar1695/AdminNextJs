import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();


const port = process.env.PORT || 8003;

app.use('/', (req: Request, res: Response, next: NextFunction) => {

    res.send('here we go: finance');
})

app.listen(port, () => {
    console.log('app is listening on ', 8001);
})