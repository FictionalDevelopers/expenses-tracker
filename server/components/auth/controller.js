import { validationResult } from 'express-validator';
import { STATUS_CODES } from 'http';

import { EXPIRE_TIME, EXPIRE_PASSWORD_RESET } from '@shared/constants/time';
import { UserService } from '@components/users';
import { createToken, verifyToken } from './service';

const { TOKEN_COOKIE_NAME } = process.env;

export const create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }

    const { email, password } = req.body;

    if (await UserService.isEmailTaken(email)) {
      return res.status(400).json({ error: 'This email is taken' });
    }

    const user = await UserService.createUser(email, password);
    const token = createToken({ user }, EXPIRE_TIME);

    res.cookie(TOKEN_COOKIE_NAME, token, {
      signed: true,
      httpOnly: true,
      maxAge: EXPIRE_TIME,
    });

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ error: { email: 'Invalid email' } });
    }

    const isPasswordValid = UserService.isPasswordSame(
      password,
      user.passwordHash,
      user.passwordSalt,
    );

    if (!isPasswordValid) {
      return res.status(400).json({ error: { password: 'Invalid password' } });
    }

    const token = createToken({ user }, EXPIRE_TIME);

    res.cookie(TOKEN_COOKIE_NAME, token, {
      signed: true,
      httpOnly: true,
      maxAge: EXPIRE_TIME,
    });

    // @TODO uncomment once implemented
    // await UserService.sendConfirmationEmail(email);

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

export const logout = (req, res) => {
  res.clearCookie(TOKEN_COOKIE_NAME, { signed: true, httpOnly: true });

  return res.json({});
};

export const current = (req, res) => {
  const { [TOKEN_COOKIE_NAME]: token } = req.signedCookies;

  if (!token) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }

  try {
    const { user } = verifyToken(token);

    return res.json(user);
  } catch (e) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }
};

export const resetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await UserService.getUserByEmail(email);

  if (!user) {
    return res.json({});
  }

  const token = createToken({ email }, EXPIRE_PASSWORD_RESET);

  await UserService.sendPasswordResetEmail(email, token);

  return res.json({});
};