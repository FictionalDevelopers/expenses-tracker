import { genRandomString, getHmac } from '@shared/utils/hash';
import getSiteUrl from '@shared/utils/getSiteUrl';

import UserModel from './model';

import {
  sendUsingTemplate,
  TEMPLATE_NAMES,
} from '../../shared/services/Mailer';

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

export const sendPasswordResetEmail = (email, token) => {
  const url = getSiteUrl();

  return sendUsingTemplate(TEMPLATE_NAMES.EMAIL_PASSWORD_RESET, {
    to: [{ email }],
    dynamic_template_data: {
      resetLink: `${url}/password-update/${token}`,
    },
  });
};
