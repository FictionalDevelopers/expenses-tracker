import { validationResult } from 'express-validator';
import { createUser } from '../services/User';
import { createToken } from '../services/Auth';

const { COOKIE_NAME } = process.env;

export const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { email, password } = req.body;
    const user = await createUser(email, password);
    const token = createToken({ user });

    res.cookie(COOKIE_NAME, token, { signed: true, httpOnly: true });

    await res.json(user);
  } catch (e) {
    next(e);
  }
};
