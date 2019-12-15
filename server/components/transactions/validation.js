import { body } from 'express-validator';

import { respondOnValidationError } from '@common/middlewares';

const validateAmount = () =>
  body('amount')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Amount is required field')
    .isInt()
    .withMessage('Amount should be a number');

const validateDate = () =>
  body('date')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Date is required field')
    .isISO8601()
    .withMessage('Invalid date');

const validateNote = () =>
  body('note').optional({
    checkFalsy: true,
    nullable: true,
  });

export const validateTransactionCreation = () => [
  validateAmount(),
  validateDate(),
  validateNote(),
  respondOnValidationError,
];
