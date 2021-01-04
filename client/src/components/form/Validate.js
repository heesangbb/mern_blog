export const EMAIL_PATTERN = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$';

export const validate = (name, value) => {
  let errors = {};
  switch (name) {
    case 'name':
      if (value.length === 0) {
        errors.name = 'Username is required';
      }
      break;
    case 'email':
      if (value.length === 0) {
        errors.email = 'Email is required';
      } else if (!value.match(EMAIL_PATTERN)) {
        errors.email = 'Enter a valid email id';
      }
      break;
    case 'password':
      if (value.length === 0) {
        errors.password = 'Password is required';
      } else if (value.length < 6) {
        errors.password = 'Password must be atleast 6 characters';
      }
      break;
    case 'passwordConfirm':
      if (value.length === 0) {
        errors.passwordConfirm = 'Password confirm is required';
      } else if (value.length < 6) {
        errors.passwordConfirm = 'Password must be atleast 6 characters';
      }
      break;
    case 'title':
      if (value.length === 0) {
        errors.title = 'Title is required';
      }
      break;
    case 'body':
      if (value.length === 0) {
        errors.body = 'Description is required';
      }
      break;
    default:
      break;
  }
  return errors;
};
