import express, { Request, Response, NextFunction, Application } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const port = process.env.PORT || 8002;

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('here we go: courses')
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})