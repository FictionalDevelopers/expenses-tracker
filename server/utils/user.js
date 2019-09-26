import { createHmac, randomBytes } from 'crypto';

const { DB_SALT } = process.env;

const genRandomString = length => randomBytes(length).toString('hex');

const getHmac = (password, passwordSalt) => {
  const salt = passwordSalt + DB_SALT;
  const hash = createHmac('sha512', salt);
  hash.update(password);
  const value = hash.digest('hex');

  return {
    passwordSalt,
    passwordHash: value,
  };
};

export const saltHashPassword = password => {
  const passwordSalt = genRandomString(32);

  return getHmac(password, passwordSalt);
};
