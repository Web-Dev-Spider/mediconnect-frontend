const isEmail = (email) => /\S+@\S+\.\S+/.test(email);

const validateForm = (formData) => {
  let errors = {};
  const { email, userName, password, confirmPassword } = formData;

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (!userName.trim()) {
    errors.userName = "Username is required";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  }
  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export { isEmail, validateForm };
