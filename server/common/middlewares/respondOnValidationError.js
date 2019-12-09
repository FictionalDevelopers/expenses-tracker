import { validationResult } from 'express-validator';

function respondOnValidationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() });
  }

  return next();
}

export default respondOnValidationError;
