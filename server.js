import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/connection.js'
import router from './src/routes/router.js';
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();

// creating the express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setting view engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views'));

// Routes
app.use('/user',router);

// getting the port from .env file
const port = process.env.PORT || 3000;

// connect to mongodb server
connectDB();


app.listen(port, () => console.log('listening on port: ', port));