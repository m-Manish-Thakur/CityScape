export const validateFormData = (username, email, password) => {
  console.log(username, email, password);
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!validEmail) {
    return "Invalid Email";
  } else if (!validPassword) {
    return "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character";
  } else {
    return null;
  }
};
