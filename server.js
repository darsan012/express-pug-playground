import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/connection.js'
import router from './src/routes/router.js';


dotenv.config();

// creating the express app
const app = express();
app.use(express.json());
app.use(router);

// getting the port from .env file
const port = process.env.PORT || 3000;

// connect to mongodb server
connectDB();


app.listen(port, () => console.log('listening on port: ', port));