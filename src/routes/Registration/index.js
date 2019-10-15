import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { styles } from './styles';
import { signUp } from '../../state/auth/actions';
import validate from './validate';
import renderTextField from './renderTextField';

const Registration = () => {
  console.log(validate);

  const styleList = styles();

  return (
    <div className={styleList.container}>
      <div className={styleList.backBtn}>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </Link>
      </div>
      <form className={styleList.form}>
        <Typography variant="h4">Sign up</Typography>
        <Field
          name="email"
          label="Email"
          margin="normal"
          color="primary"
          variant="outlined"
          required
          fullWidth
          component={renderTextField}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          margin="normal"
          color="primary"
          variant="outlined"
          required
          fullWidth
          component={renderTextField}
        />
        <Button
          color="primary"
          fullWidth
          size="large"
          variant="contained"
          onClick={() => signUp()}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

const formWrapper = reduxForm({ form: 'registrationForm', validate })(
  Registration
);

export default connect(
  null,
  { signUp }
)(formWrapper);
