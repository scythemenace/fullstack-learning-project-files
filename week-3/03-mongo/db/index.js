const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://pankur216:L4oqQ2mG1SdZ5k72@cluster0.goqdl4x.mongodb.net/course_seller?retryWrites=true&w=majority&appName=Cluster0",
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: Number,
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
