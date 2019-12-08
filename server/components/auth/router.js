import { Router } from 'express';

import { validateUser, validateEmail } from './validation';
import { create, login, logout, resetPassword, current } from './controller';

const router = Router();

router.post('/register', validateUser(), create);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current', current);
router.post('/reset-password', validateEmail(), resetPassword);

export default router;
