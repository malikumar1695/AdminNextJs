import express, { Request, Response, NextFunction, Application } from 'express';

import dotenv from 'dotenv';
import courseRoutes from './routes/courseRoute';
import setupDynamoDB from './config/dynamoConfig';

dotenv.config();

const app: Application = express();
setupDynamoDB();

const port = process.env.PORT || 5002;

// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('here we go: courses')
// })

const router = express.Router();

router.use("/", courseRoutes);

app.use("/api", router);

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})