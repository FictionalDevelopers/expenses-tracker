import { Router } from 'express';
import { validateUser } from '../validation/auth';
import { create, login, logout, current } from '../controllers/user';

const router = Router();

router.post('/register', validateUser(), create);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current', current);

export default router;
