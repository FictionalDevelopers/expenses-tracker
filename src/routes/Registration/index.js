import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { styles, theme } from './styles';
import { signUp } from '../../state/auth/actions';

const Registration = () => {
  const styleList = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailInput = e => {
    setEmail(e.target.value);
  };

  const onPasswordInput = e => {
    setPassword(e.target.value);
  };

  return (
    <div className={styleList.container}>
      <div className={styleList.backBtn}>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </Link>
      </div>
      <form className={styleList.form}>
        <Typography variant="h4">Sign up</Typography>
        <ThemeProvider theme={theme}>
          <TextField
            color="primary"
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
            required
            variant="outlined"
            onChange={onEmailInput}
          />
          <TextField
            color="primary"
            autoComplete="current-password"
            id="password"
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            required
            type="password"
            variant="outlined"
            onChange={onPasswordInput}
          />
          <Button
            color="primary"
            fullWidth
            size="large"
            variant="contained"
            onClick={() => signUp(email, password)}
          >
            Sign up
          </Button>
        </ThemeProvider>
      </form>
    </div>
  );
};

export default connect(
  null,
  signUp
)(Registration);
