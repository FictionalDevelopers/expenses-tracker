import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { login } from '../../state/auth/actions';
import { styles, theme } from './styles';

const propTypes = {
  login: PropTypes.func.isRequired,
};

const Login = props => {
  const { login } = props;
  const classes = styles();

  return (
    <div className={classes.form}>
      <h1>Login route</h1>
      <ThemeProvider theme={theme}>
        <Button color="primary" onClick={login} variant="contained">
          login
        </Button>
        <Link to="/registration">Create an account</Link>
      </ThemeProvider>
    </div>
  );
};

Login.propTypes = propTypes;

export default connect(
  null,
  { login }
)(Login);
