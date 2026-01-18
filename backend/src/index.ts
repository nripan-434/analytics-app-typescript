import * as express from 'express'
import * as dotenv from 'dotenv'
import eventRoutes from './routes/eventroute';
dotenv.config()

const app=express();
app.use(express.json());
app.use('/event',eventRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is connected')

})