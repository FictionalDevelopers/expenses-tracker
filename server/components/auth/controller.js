import { EXPIRE_PASSWORD_RESET, EXPIRE_TIME } from '@common/constants/time';
import { ApiError } from '@common/Errors';
import { UserService } from '@components/users';

import { createToken, verifyToken } from './service';
import { PASSWORD_RESET_TOKEN } from './constants';

const { TOKEN_COOKIE_NAME } = process.env;

export const create = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (await UserService.isEmailTaken(email)) {
      return next(new ApiError('This email is taken'));
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
      return next(new ApiError({ email: 'Invalid email' }));
    }

    const isPasswordValid = UserService.isPasswordSame(
      password,
      user.passwordHash,
      user.passwordSalt,
    );

    if (!isPasswordValid) {
      return next(new ApiError({ password: 'Invalid password' }));
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
  const { user } = req;

  return res.json(user);
};

export const resetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await UserService.getUserByEmail(email);

  if (!user) {
    return res.json({});
  }

  const token = createToken(
    {
      type: PASSWORD_RESET_TOKEN,
      email,
    },
    EXPIRE_PASSWORD_RESET,
  );

  await UserService.sendPasswordResetEmail(email, token);

  return res.json({});
};

export const verifyPasswordResetToken = async (req, res) => {
  const { token } = req.params;
  try {
    const { type, email } = verifyToken(token);

    if (type !== PASSWORD_RESET_TOKEN) {
      return res.status(401).json({ error: 'invalid token' });
    }

    return res.json({ email });
  } catch (e) {
    return res.status(401).json({ error: e.message });
  }
};

export const updatePassword = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserService.getUserByEmail(email);

  if (!user) {
    return next(new ApiError({ email: 'Invalid email' }));
  }

  await UserService.setPasswordByEmail(email, password);

  return res.json({});
};
