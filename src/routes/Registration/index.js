import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { styles } from './styles';
import { signUp } from '../../state/auth/actions';
import renderTextField from './renderTextField';
import validate from './validate';

const Registration = ({ handleSubmit, signUp }) => {
  const styleList = styles();

  const onSubmit = formValues => {
    signUp(formValues);
  };

  return (
    <div className={styleList.container}>
      <div className={styleList.backBtn}>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
        </Link>
      </div>
      <form className={styleList.form} onSubmit={handleSubmit(onSubmit)}>
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
          type="submit"
          color="primary"
          fullWidth
          size="large"
          variant="contained"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const formWrapper = reduxForm({ form: 'registrationForm', validate })(
  Registration
);

export default connect(
  null,
  { signUp }
)(formWrapper);
