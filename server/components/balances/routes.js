import { Router } from 'express';

import { authorized } from '@common/middlewares';
import { validateTransactionCreation } from '@components/transactions/validation';

import { validateBalanceCreation } from './validation';
import * as BalanceController from './controller';

const route = Router();

route.post(
  '/',
  authorized,
  validateBalanceCreation(),
  BalanceController.createBalance,
);

route.get(
  '/:balanceId/transactions',
  authorized,
  BalanceController.getTransactions,
);

route.post(
  '/:balanceId/transactions',
  authorized,
  validateTransactionCreation(),
  BalanceController.addTransaction,
);

export default route;
