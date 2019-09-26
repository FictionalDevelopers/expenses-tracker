import UserModel from '../models/User';
import { genRandomString, getHmac } from '../utils/hash';

const { DB_SALT } = process.env;
const salt = genRandomString(32);

export const createUser = (email, password) =>
  UserModel.create({
    email,
    passwordHash: getHmac(password, salt + DB_SALT),
    passwordSalt: salt,
  });
