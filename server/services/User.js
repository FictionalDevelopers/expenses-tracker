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

const isPasswordSame = (pass, encryptedPass, salt) => {
  const passwordHash = getHmac(pass, salt + DB_SALT);

  return passwordHash === encryptedPass;
};

export const getUser = (email, password) => {
  return UserModel.findOne({ email }, (err, user) => {
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = isPasswordSame(
      password,
      user.passwordHash,
      user.passwordSalt
    );

    return isPasswordValid ? user : null;
  });
};
