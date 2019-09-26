import UserModel from '../models/User';
import { genRandomString, getHmac } from '../utils/hash';

const { DB_SALT } = process.env;

export const createUser = (email, password) =>
  UserModel.create({
    email,
    passwordHash: getHmac(password, genRandomString(32) + DB_SALT),
    passwordSalt: genRandomString(32),
  });
