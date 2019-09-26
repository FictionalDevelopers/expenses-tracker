import UserModel from '../models/User';
import { saltHashPassword } from '../utils/user';

export const createUser = (email, password) => {
  const { passwordHash, passwordSalt } = saltHashPassword(password);

  return UserModel.create({
    email,
    passwordHash,
    passwordSalt,
  });
};
