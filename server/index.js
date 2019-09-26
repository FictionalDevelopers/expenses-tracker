import express, { json } from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import apiRoutes from './routes/api';
import dbConnection from './db';

config();

const { PORT } = process.env;
const app = express();
const port = PORT || 3000;

app.use(morgan('dev'));

app.use(json());

dbConnection();

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
