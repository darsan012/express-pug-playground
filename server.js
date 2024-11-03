import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
// creating the express app
const app = express();
app.use(express.json());

// getting the port from .env file
const port = process.env.PORT || 3000;


app.listen(port, () => console.log('listening on port: ', port));