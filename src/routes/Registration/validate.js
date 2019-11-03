export default formValues => {
  const errors = {};
  const { email, password } = formValues;
  const requiredFields = ['email', 'password'];

  const emailValidation = email =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  requiredFields.forEach(field => {
    if (!formValues[field]) {
      errors[field] = 'Required';
    }
  });

  if (email && emailValidation(email)) {
    errors.email = 'Invalid email address';
  }
  if (password && password.length < 3) {
    errors.password = 'Your password not safe';
  }

  return errors;
};
