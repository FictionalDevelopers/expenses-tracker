import { STATUS_CODES } from 'http';

import { TOKEN_COOKIE_NAME } from '@common/config';
import { AuthService } from '@components/auth';

function authorized(req, res, next) {
  const {
    signedCookies: { [TOKEN_COOKIE_NAME]: token },
  } = req;

  if (!token) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }

  try {
    const { user } = AuthService.verifyToken(token);
    req.user = user;

    return next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

export default authorized;
