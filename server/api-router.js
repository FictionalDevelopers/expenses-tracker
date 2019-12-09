import { Router } from 'express';

import { AuthRouter } from '@components/auth';
import { BalancesRouter } from '@components/balances';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/balances', BalancesRouter);

export default router;
