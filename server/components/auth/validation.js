import { body } from 'express-validator';
import { respondOnValidationError } from '@common/middlewares';

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

export const validateUserRegistration = () => [
  validatePassword(),
  validateEmail(),
  respondOnValidationError,
];

export const validatePasswordReset = () => [
  validateEmail(),
  respondOnValidationError,
];

export const validatePasswordUpdate = () => [
  validateEmail(),
  validatePassword(),
  body('confirmation')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password confirmation is required field')

    // eslint-disable-next-line consistent-return
    .custom((confirmation, { req }) => {
      const {
        body: { password },
      } = req;
      if (confirmation !== password) {
        return Promise.reject(new Error('Passwords do not match'));
      }

      return true;
    }),
  respondOnValidationError,
];
