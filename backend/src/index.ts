import * as express from 'express'
import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import eventRoutes from './routes/eventroute';
dotenv.config()

const app=express();
app.use(express.json());
app.use('/event',eventRoutes)

mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log("DB connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error("DB connection failed:", err);
    })
