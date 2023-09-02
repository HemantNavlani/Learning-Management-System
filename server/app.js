import express from 'express'
const app = express();

import {config} from 'dotenv'
config()

import cors from 'cors';
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true
}))

import  cookieParser from 'cookie-parser';
app.use(cookieParser());


import morgan from 'morgan';
app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

import userRoutes from './routes/userRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js';

app.use('/ping',(req,res)=>{
    res.send('Pong')
})

//routes of 3 modules

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/courses',courseRoutes)
app.use('/api/v1/payments',paymentRoutes)

app.all('*',(req,res)=>{
    res.status(404).send('OOPS!! 404 Page Not Found')
})

app.use(errorMiddleware);

export default app;
