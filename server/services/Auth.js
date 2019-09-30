import { sign } from 'jsonwebtoken';

const { TOKEN_SECRET } = process.env;

export const createToken = data => {
  return sign(data, TOKEN_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};
