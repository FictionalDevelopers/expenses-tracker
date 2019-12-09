import { body } from 'express-validator';

import { respondOnValidationError } from '@common/middlewares';

const validateName = () =>
  body('name')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Name is required field');

const validateAmount = () =>
  body('amount')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Amount is required field')
    .isInt({ min: 0 })
    .withMessage('Amount should be greater than 0');

const validateUserId = () =>
  body('userId')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('userId is required field');

export const validateBalanceCreation = () => [
  validateName(),
  validateAmount(),
  validateUserId(),
  respondOnValidationError,
];
