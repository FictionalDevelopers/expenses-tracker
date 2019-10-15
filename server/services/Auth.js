import { verify, sign } from 'jsonwebtoken';
import { EXPIRE_TIME } from '../constants/time';

const { TOKEN_SECRET } = process.env;

export const verifyToken = token => verify(token, TOKEN_SECRET);

export const createToken = data =>
  sign(data, TOKEN_SECRET, {
    expiresIn: EXPIRE_TIME,
  });
