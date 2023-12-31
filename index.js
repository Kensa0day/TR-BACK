import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';
import connectDB from './connectMongo.js';


connectDB();





dotenv.config()
const app = express();
const PORT = process.env.PORT
const corsOptions = {
    origin: true,
    credentials: true
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// test

app.get('/', (req, res) => {
    res.send('API RUNNING ONLINE');
})

//database connect
// const connect = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI)

//         console.log('Mongo Connect')

//     } catch (err) {
//         console.log('Connect Failed')

//     }
// }

//middleware

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.set("strictQuery", false);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
