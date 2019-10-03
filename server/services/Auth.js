import { sign } from 'jsonwebtoken';
import { EXPIRE_TIME } from '../constants/time';

const { TOKEN_SECRET } = process.env;

export const createToken = data => {
  return sign(data, TOKEN_SECRET, {
    expiresIn: EXPIRE_TIME,
  });
};
