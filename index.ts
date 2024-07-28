import express from 'express';
import { connectToMongo } from './services/mongo';

const app = express();
const port = process.env.PORT ?? 8000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

connectToMongo()