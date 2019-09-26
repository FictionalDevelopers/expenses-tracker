import express, { json } from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import apiRoutes from './routes/api';
import dbConnection from './db';

config();

const { DB_PORT, DB_NAME, PORT } = process.env;
const app = express();
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;
const port = PORT || 3000;

app.use(morgan('dev'));

app.use(json());

dbConnection(url);

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
