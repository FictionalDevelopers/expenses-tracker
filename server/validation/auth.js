import { body } from 'express-validator';
import { isEmailTaken } from '../services/User';

const validatePassword = () =>
  body('password')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password is required field');

const validateEmail = () =>
  body('email')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Email is required field')
    .isEmail()
    .withMessage('Invalid email')
    .custom(async email => {
      if (await isEmailTaken(email)) {
        throw new Error('This email is taken');
      }
    });

export const validateUser = () => [validatePassword(), validateEmail()];
