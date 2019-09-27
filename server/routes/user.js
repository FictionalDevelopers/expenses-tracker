import { Router } from 'express';
import { createUser } from '../services/User';

const router = Router();

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await createUser(email, password);

  return res.json(user);
});

export default router;
