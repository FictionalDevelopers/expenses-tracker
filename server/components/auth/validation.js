import { body } from 'express-validator';

export const validatePassword = () =>
  body('password')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password is required field');

export const validateEmail = () =>
  body('email')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Email is required field')
    .isEmail()
    .withMessage('Invalid email');

export const validateUser = () => [validatePassword(), validateEmail()];
