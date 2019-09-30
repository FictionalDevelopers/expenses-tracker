import { body } from 'express-validator';

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
    .withMessage('Invalid email');

export const validateUser = () => [validatePassword(), validateEmail()];
