import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { login } from '../../state/auth/actions';
import styles from './styles';

const propTypes = {
  login: PropTypes.func.isRequired,
};

const useStyles = makeStyles(styles);

const Login = props => {
  const { login } = props;
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <h1>Login route</h1>
      <Button color="primary" onClick={login} variant="contained">
        login
      </Button>
      <Link to="/registration">Create an account</Link>
    </div>
  );
};

Login.propTypes = propTypes;

export default connect(null, { login })(Login);
