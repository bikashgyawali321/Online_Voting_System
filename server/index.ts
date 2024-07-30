import express from 'express';
import { connectToMongo } from './services/mongo';;
import authRoutes from './routes/auth/routes'

const app = express();
const port = process.env.PORT ?? 8000;


app.use(express.json());

app.use('/auth', authRoutes)




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

connectToMongo();


export default app;