import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes/api';
import loadEnv from './utils/env';
import createDbConnection from './db';

loadEnv();

const { PORT, COOKIE_NAME } = process.env;
const app = express();
const port = PORT || 3000;

createDbConnection();

app.use(morgan('dev'));
app.use(cookieParser(COOKIE_NAME));
app.use(json());
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
