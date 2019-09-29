import { sign } from 'jsonwebtoken';
import loadEnv from '../utils/env';

loadEnv();

const { TOKEN_SECRET } = process.env;

export const createToken = data => {
  return sign(data, TOKEN_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};
