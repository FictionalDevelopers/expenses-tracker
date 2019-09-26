import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const { DB_PORT, DB_NAME } = process.env;
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

export default () =>
  mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));
