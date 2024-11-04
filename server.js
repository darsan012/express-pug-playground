import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/connection.js'


dotenv.config();

// creating the express app
const app = express();
app.use(express.json());

// getting the port from .env file
const port = process.env.PORT || 3000;

// connect to mongodb server
connectDB();


app.listen(port, () => console.log('listening on port: ', port));