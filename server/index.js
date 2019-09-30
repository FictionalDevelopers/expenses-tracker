import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import env from './utils/env';
import apiRoutes from './routes/api';
import createDbConnection from './db';

const { PORT, TOKEN_COOKIE_NAME } = env;
const app = express();
const port = PORT || 3000;

createDbConnection();

app.use(morgan('dev'));
app.use(cookieParser(TOKEN_COOKIE_NAME));
app.use(json());
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
