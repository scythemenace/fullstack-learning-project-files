// Middleware for handling auth
const jwtPassword = require("../token.js");
const { Admin } = require("../db/index.js");
const jwt = require("jsonwebtoken");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  if (decoded != undefined && Object.keys(decoded).length >= 1) {
    const username = decoded.username;
    const adminExists = Admin.findOne({ username: username });
    if (adminExists) {
      return next();
    }
    res.status(404).json({
      message: "Admin doesn't exist",
    });
  }
  res.status(404).json({
    message: "Token is invalid",
  });
}

module.exports = adminMiddleware;
