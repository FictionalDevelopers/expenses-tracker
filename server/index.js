import express, { json } from 'express';
import http from 'http';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';

require('dotenv').config()

const { DB_PORT, DB_NAME, PORT } = process.env;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const app = express();
const url = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

app.use(morgan('dev'));

app.use(json());

mongoose
    .connect(url, {useNewUrlParser: true})
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

const port = PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`)
