import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { login } from '../../state/auth/actions';

const propTypes = {
  login: PropTypes.func.isRequired,
};

const Login = props => {
  const { login } = props;

  return (
    <div>
      <h1>Login route</h1>
      <Button color="primary" onClick={login} variant="contained">
        login
      </Button>
    </div>
  );
};

Login.propTypes = propTypes;

export default connect(
  null,
  { login }
)(Login);
