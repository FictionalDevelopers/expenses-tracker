import { Router } from 'express';
import { validateUser } from '../validation/auth';
import { create } from '../controllers/user';

const router = Router();

router.post('/register', validateUser(), create);

export default router;
