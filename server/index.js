import express, { json } from 'express';
import morgan from 'morgan';
import { load } from 'dotenv-extended';
import apiRoutes from './routes/api';
import createDbConnection from './db';

load({
  errorOnMissing: true,
});

const { PORT } = process.env;
const app = express();
const port = PORT || 3000;

createDbConnection();

app.use(morgan('dev'));

app.use(json());

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Listening on port ${PORT}`));
