// Middleware for handling auth
const { Admin } = require("../db/index.js");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  let adminExists = await Admin.findOne({
    username: username,
  });
  if (adminExists) {
    return next();
  }
  res.status(404).json({
    message: "Admin doesn't exist",
  });
}

module.exports = adminMiddleware;
