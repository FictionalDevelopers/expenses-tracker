import { STATUS_CODES } from 'http';
import ApiError from './ApiError';

const STATUS = 401;

class UnauthorizedError extends ApiError {
  constructor() {
    super(STATUS_CODES[STATUS], { status: STATUS });
  }
}

export default UnauthorizedError;
