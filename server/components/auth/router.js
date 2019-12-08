import { Router } from 'express';

import { validateEmail, validateUser } from './validation';
import * as AuthController from './controller';

const router = Router();

router.post('/register', validateUser(), AuthController.create);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/current', AuthController.current);
router.post('/reset-password', validateEmail(), AuthController.resetPassword);
router.get('/reset-password/:token', AuthController.verifyPasswordResetToken);

export default router;
