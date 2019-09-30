import { validationResult } from 'express-validator';
import { createUser } from '../services/User';
import { createToken } from '../services/Auth';

const { TOKEN_COOKIE_NAME } = process.env;

export const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    const { email, password } = req.body;
    const user = await createUser(email, password);
    const token = createToken({ user });

    res.cookie(TOKEN_COOKIE_NAME, token, { signed: true, httpOnly: true });

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};
