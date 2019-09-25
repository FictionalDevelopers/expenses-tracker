import express, { json } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import apiRoutes from './routes/api';

config();

const { DB_PORT, DB_NAME, PORT } = process.env;
const app = express();
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;
const port = PORT || 3000;

app.use(morgan('dev'));

app.use(json());

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
