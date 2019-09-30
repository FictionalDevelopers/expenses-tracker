import { Router } from 'express';
import { validateUser } from '../validation/auth';
import { create, login } from '../controllers/user';

const router = Router();

router.post('/register', validateUser(), create);
router.post('/login', login);

export default router;
