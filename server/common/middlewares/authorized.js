import { TOKEN_COOKIE_NAME } from '@common/config';
import { AuthService } from '@components/auth';
import { ApiError, UnauthorizedError } from '@common/Errors';

function authorized(req, res, next) {
  const {
    signedCookies: { [TOKEN_COOKIE_NAME]: token },
  } = req;

  if (!token) {
    return next(new UnauthorizedError());
  }

  try {
    const { user } = AuthService.verifyToken(token);
    req.user = user;

    return next();
  } catch (e) {
    return next(new ApiError(e.message));
  }
}

export default authorized;
