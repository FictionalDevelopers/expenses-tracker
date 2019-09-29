import UserModel from '../models/User';
import { genRandomString, getHmac } from '../utils/hash';

const { DB_SALT } = process.env;

export const isEmailTaken = async email =>
  (await UserModel.findOne({ email })) !== null;

export const createUser = (email, password) => {
  const salt = genRandomString(32);

  return UserModel.create({
    email,
    passwordHash: getHmac(password, salt + DB_SALT),
    passwordSalt: salt,
  });
};
