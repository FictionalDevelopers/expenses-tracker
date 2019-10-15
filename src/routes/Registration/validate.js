export default formValues => {
  const errors = {};
  const requiredFields = ['email', 'password'];

  requiredFields.forEach(field => {
    if (!formValues[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    formValues.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = 'Invalid email address';
  }

  return errors;
};
