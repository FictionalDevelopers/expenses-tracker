import { verify, sign } from 'jsonwebtoken';

const { TOKEN_SECRET } = process.env;

export const verifyToken = token => verify(token, TOKEN_SECRET);

export const createToken = (data, expireTime) =>
  sign(data, TOKEN_SECRET, {
    expiresIn: expireTime,
  });
