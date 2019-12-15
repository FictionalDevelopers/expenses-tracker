import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import env from '@common/utils/env';

import ApiRouter from './api-router';
import errorHandler from './errorHandler';
import createDbConnection from './db';

const { PORT, COOKIE_SECRET } = env;
const app = express();
const port = PORT || 3000;

createDbConnection();

app.use(morgan('dev'));
app.use(cookieParser(COOKIE_SECRET));
app.use(json());
app.use('/api', ApiRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
