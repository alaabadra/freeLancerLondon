const yup = require('yup');

const signupValidation = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(3)
    .max(15),
  email: yup
    .string()
    .required()
    .max(20),
  password: yup
    .string()
    .required()
    .min(5,'Password is too short - should be 5 chars minimum.')
    .max(25),
  confPassword: yup
    .string()
    .oneOf(
        [yup.ref('password'), null],
        'Password did not match: Please try again...'
      )
    .required()
    .min(3)
    .max(15),
});
export default signupValidation;
