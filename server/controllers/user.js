import { validationResult } from 'express-validator';
import {
  createUser,
  isEmailTaken,
  getUser,
  isPasswordSame,
} from '../services/User';
import { createToken } from '../services/Auth';

const { TOKEN_COOKIE_NAME } = process.env;

export const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }

    const { email, password } = req.body;

    if (await isEmailTaken(email)) {
      return res.status(400).json({ error: 'This email is taken' });
    }

    const user = await createUser(email, password);
    const token = createToken({ user });

    res.cookie(TOKEN_COOKIE_NAME, token, {
      signed: true,
      httpOnly: true,
      expires: 24 * 60 * 60,
    });

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email);
    const isPasswordValid =
      user && isPasswordSame(password, user.passwordHash, user.passwordSalt);

    if (!user || !isPasswordValid) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const token = createToken({ user });

    res.cookie(TOKEN_COOKIE_NAME, token, {
      signed: true,
      httpOnly: true,
      expires: 24 * 60 * 60,
    });

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

export const logout = (req, res) => {
  res.clearCookie(TOKEN_COOKIE_NAME, { signed: true, httpOnly: true });

  return res.json({});
};
