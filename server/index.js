import express, { json } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import { config } from 'dotenv';

config();

const { DB_PORT, DB_NAME, PORT } = process.env;
const HTML_FILE = path.resolve(__dirname, '../dist/index.html');
const app = express();
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;
const port = PORT || 3000;

app.use(morgan('dev'));

app.use(json());

mongoose
    .connect(url, {useNewUrlParser: true})
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.status(200).send('root route');
});

app.listen(port, () => console.log(`Listening on port ${PORT}`));
