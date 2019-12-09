import { Router } from 'express';

import { authorized } from '@common/middlewares';

import { validateBalanceCreation } from './validation';
import * as BalanceController from './controller';

const route = Router();

route.post(
  '/',
  authorized,
  validateBalanceCreation(),
  BalanceController.createBalance,
);

export default route;
