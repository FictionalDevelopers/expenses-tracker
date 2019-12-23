import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { signUp } from '../../state/auth/actions';
import renderField from './renderField';
import { email, minValue, required } from '../../common/validation';

const useStyles = makeStyles(styles);
const minValue3 = minValue(4);

const Registration = ({ handleSubmit, signUp }) => {
  const styleList = useStyles();

  return (
    <div className={styleList.container}>
      <form className={styleList.form} onSubmit={handleSubmit(signUp)}>
        <Typography variant="h4">Sign up</Typography>
        <Field
          name="email"
          label="Email"
          margin="normal"
          color="primary"
          variant="outlined"
          required
          fullWidth
          validate={[required, email]}
          component={renderField}
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
          validate={[required, minValue3]}
          component={renderField}
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

export default compose(
  reduxForm({ form: 'registrationForm' }),
  connect(null, { signUp }),
)(Registration);
