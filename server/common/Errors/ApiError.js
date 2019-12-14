import { STATUS_CODES } from 'http';

const DEFAULT_STATUS = 400;

class ApiError extends Error {
  constructor(
    payload = STATUS_CODES[DEFAULT_STATUS],
    { status = DEFAULT_STATUS } = { status: DEFAULT_STATUS },
  ) {
    const message =
      typeof payload === 'string' ? payload : STATUS_CODES[status];
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.payload = payload;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
