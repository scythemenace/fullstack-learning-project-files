const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("enter ur mongodb connect url");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  token: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  token: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: String,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
  userThatPurchased: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
