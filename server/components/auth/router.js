import { Router } from 'express';

import { authorized } from '@common/middlewares';

import {
  validatePasswordReset,
  validatePasswordUpdate,
  validateUserRegistration,
} from './validation';
import * as AuthController from './controller';

const router = Router();

router.get('/logout', AuthController.logout);
router.get('/current', authorized, AuthController.current);
router.get('/reset-password/:token', AuthController.verifyPasswordResetToken);

router.put(
  '/update-password',
  validatePasswordUpdate(),
  AuthController.updatePassword,
);

router.post('/register', validateUserRegistration(), AuthController.create);
router.post('/login', AuthController.login);
router.post(
  '/reset-password',
  validatePasswordReset(),
  AuthController.resetPassword,
);

export default router;
