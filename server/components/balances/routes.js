import { Router } from 'express';

import * as BalanceController from './controller';

const route = Router();

route.post('/', BalanceController.createBalance);

export default route;
