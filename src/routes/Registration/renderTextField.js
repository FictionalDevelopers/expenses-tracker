import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const renderError = ({ error, touched, valid, active }) => {
  if (error === 'Required' && touched && !active) {
    return error;
  }
  if (touched && !active && !valid) {
    return error;
  }
  return '';
};

const renderTextField = props => {
  const { input, meta, ...custom } = props;
  return (
    <TextField
      {...input}
      {...custom}
      error={meta.error && meta.touched && !meta.active}
      helperText={renderError(meta)}
    />
  );
};

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
};

export default renderTextField;
