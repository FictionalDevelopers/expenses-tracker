import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { styles, CssTextField } from './styles';
import { SignUp } from '../../state/auth/actions';

const Registration = () => {
  const styleList = styles();

  return (
    <div>
      <Link to="/">Back</Link>
      <form className={styleList.form}>
        <h1>Sign up</h1>
        <CssTextField
          autoComplete="email"
          autoFocus
          fullWidth
          id="email"
          label="Email Address"
          margin="normal"
          name="email"
          required
          variant="outlined"
        />
        <CssTextField
          autoComplete="current-password"
          id="password"
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          required
          type="password"
          variant="outlined"
        />
        <Button
          fullWidth
          classes={{ root: styleList.button }}
          variant="contained"
          onClick={SignUp}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default connect()(Registration);
