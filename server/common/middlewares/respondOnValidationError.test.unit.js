import { validationResult } from 'express-validator';
import { ApiError } from '@common/Errors';

import respondOnValidationError from './respondOnValidationError';

jest.mock('express-validator');
jest.mock('@common/Errors/ApiError', () => {
  return args => args;
});

const req = Symbol('req');
const json = jest.fn();
const res = {
  json,
};
const next = jest.fn().mockImplementation(data => data);

describe('common - middlewares - respondOnValidationError', () => {
  it('should call next() if no errors occurred', () => {
    const isEmpty = () => true;
    validationResult.mockReturnValueOnce({ isEmpty });

    respondOnValidationError(req, res, next);

    expect(validationResult).toBeCalledTimes(1);
    expect(validationResult).toBeCalledWith(req);
    expect(next).toBeCalledTimes(1);
    expect(next).toBeCalledWith();
  });

  it('should call respond with status code 400 if there are validation errors', () => {
    const isEmpty = () => false;
    const mapped = () => ({
      errors: 'Errors',
    });
    validationResult.mockReturnValueOnce({ isEmpty, mapped });

    respondOnValidationError(req, res, next);

    expect(validationResult).toBeCalledTimes(1);
    expect(validationResult).toBeCalledWith(req);
    expect(next).toBeCalledTimes(1);
    expect(next).toBeCalledWith(new ApiError(mapped()));
  });
});
