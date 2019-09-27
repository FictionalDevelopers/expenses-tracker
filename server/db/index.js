import mongoose from 'mongoose';

const { DB_PORT, DB_NAME } = process.env;
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

export default () =>
  mongoose
    .connect(url, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));
