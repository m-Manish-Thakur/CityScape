const validateUser = (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || username.trim().length < 4) {
      return res.status(400).json({ error: "Username must be at least 4 characters long" });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (!password || !isvalidPassword(password)) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 letters, numbers, uppercase, lowercase and special chars" });
    }
    next();
  } catch (error) {
    res.status(400).json({
      error: error.errors,
    });
  }
};

// Function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Fuction to validate password formate
const isvalidPassword = (password) => {
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passRegex.test(password);
};

module.exports = validateUser;
