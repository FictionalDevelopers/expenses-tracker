import UserModel from '../models/User';
import { genRandomString, getHmac } from '../utils/hash';

import { sendUsingTemplate, TEMPLATE_NAMES } from './Mailer';

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

export const isPasswordSame = (pass, encryptedPass, salt) => {
  const passwordHash = getHmac(pass, salt + DB_SALT);

  return passwordHash === encryptedPass;
};

export const getUserByEmail = email => UserModel.findOne({ email });

export const sendConfirmationEmail = email => {
  return sendUsingTemplate(TEMPLATE_NAMES.EMAIL_CONFIRMATON, {
    to: [{ email }],
    dynamic_template_data: {
      confirmationLink: 'https://www.google.com', // @TODO replace with real link once implemented
    },
  });
};
