import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const renderError = ({ error, touched, valid }) => {
  if (error === 'Required' && touched) {
    return error;
  }
  if (touched && !valid) {
    return error;
  }
  return '';
};

const renderTextField = props => {
  const { input, meta, ...custom } = props;
  console.log(props);
  return (
    <TextField
      {...input}
      {...custom}
      error={meta.touched && meta.error}
      helperText={renderError(meta)}
    />
  );
};

renderTextField.propTypes = {
  input: PropTypes.shape(),
  meta: PropTypes.shape(),
  label: PropTypes.string,
};
renderTextField.defaultProps = {
  input: { name: '' },
  meta: { touched: false, error: false },
  label: '',
};

export default renderTextField;
