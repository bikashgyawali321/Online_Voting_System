import express from 'express';
import { connectToMongo } from './services/mongo';;
import authRoutes from './routes/auth/routes'
import votingRoutes from './routes/voting/routes';
import adminRoutes from './routes/admin/routes';

const app = express();
const port = process.env.PORT ?? 8000;


app.use(express.json());

app.use('/auth', authRoutes)
app.use('/vote', votingRoutes)
app.use('/admin', adminRoutes)




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

connectToMongo();


export default app;