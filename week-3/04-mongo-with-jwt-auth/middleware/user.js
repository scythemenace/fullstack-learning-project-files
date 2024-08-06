const { User } = require("../db/index.js");
const jwtPassword = require("../token.js");
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  if (decoded != undefined && Object.keys(decoded).length >= 1) {
    const username = decoded.username;
    const userExists = User.findOne({ username: username });
    if (userExists) {
      return next();
    }
    res.status(404).json({
      message: "User doesn't exist",
    });
  }
  res.status(404).json({
    message: "Token is invalid",
  });
}

module.exports = userMiddleware;
