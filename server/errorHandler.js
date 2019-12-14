import { ApiError } from '@common/Errors';

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ApiError) {
    const response =
      typeof err.payload === 'string'
        ? { error: err.message }
        : { errors: err.payload };

    return res.status(err.status).json(response);
  }

  return res.status(500).json({ error: err.message });
}

export default errorHandler;
