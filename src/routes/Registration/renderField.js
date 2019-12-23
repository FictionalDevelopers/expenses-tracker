import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const renderField = props => {
  const { input, meta, ...custom } = props;

  return (
    <TextField
      {...input}
      {...custom}
      error={meta.error && meta.touched && !meta.active}
      helperText={meta.error}
    />
  );
};

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
};

export default renderField;
