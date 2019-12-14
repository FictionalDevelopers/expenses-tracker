import { STATUS_CODES } from 'http';
import faker from 'faker';

import { TOKEN_COOKIE_NAME } from '@common/config';

import { AuthService } from '@components/auth';
import authorized from './authorized';

jest.mock('@components/auth');

const json = jest.fn(data => data);
const status = jest.fn(() => ({
  json,
}));
const res = {
  json,
  status,
};
const next = jest.fn();

describe('common - middlewares - authorized', () => {
  it('should verify token from signed cookies', () => {
    const token = 'token';
    const req = {
      signedCookies: {
        [TOKEN_COOKIE_NAME]: token,
      },
    };

    authorized(req, res, next);

    expect(AuthService.verifyToken).toBeCalledTimes(1);
    expect(AuthService.verifyToken).toBeCalledWith(token);
  });

  it('should set req.user if token is valid and call next', () => {
    const tokenPayload = { user: { name: faker.name.findName() } };
    const token = 'token';
    const req = {
      signedCookies: {
        [TOKEN_COOKIE_NAME]: token,
      },
    };

    AuthService.verifyToken.mockReturnValueOnce(tokenPayload);

    authorized(req, res, next);

    expect(req.user).toEqual(tokenPayload.user);
    expect(next).toBeCalledTimes(1);
    expect(next).toBeCalledWith();
  });

  it('should respond with 401 if no token found', () => {
    const req = {
      signedCookies: {},
    };

    authorized(req, res, next);

    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toBeCalledWith({ error: STATUS_CODES[401] });
  });

  it('should respond with 400 if token is not valid', () => {
    const errorMessage = 'hello little error';
    const req = {
      signedCookies: {
        [TOKEN_COOKIE_NAME]: 'token',
      },
    };

    AuthService.verifyToken.mockImplementationOnce(() => {
      throw new Error(errorMessage);
    });

    authorized(req, res, next);

    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledWith({ error: errorMessage });
  });
});
