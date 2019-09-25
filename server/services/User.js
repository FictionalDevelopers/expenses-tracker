import { randomBytes, createHmac } from 'crypto';
import UserModel from '../models/User';

const genRandomString = length =>
  randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);

const sha512 = (password, salt) => {
  const hash = createHmac('sha512', salt);
  hash.update(password);
  const value = hash.digest('hex');

  return {
    passwordSalt: salt,
    passwordHash: value,
  };
};

export const saltHashPassword = password => {
  const salt = genRandomString(8);

  return sha512(password, salt);
};

export const createUser = (email, password) => {
  const { passwordHash, passwordSalt } = saltHashPassword(password);

  return UserModel.create({
    email,
    passwordHash,
    passwordSalt,
  });
};
