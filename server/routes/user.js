import { Router } from 'express';
import { validateUser } from '../validation/auth';
import { create, login, logout } from '../controllers/user';

const router = Router();

router.post('/register', validateUser(), create);
router.post('/login', login);
router.post('/logout', logout);

export default router;
