const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db/index.js");
const { User } = require("../db/index.js");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  let userExists = await User.findOne({
    username: username,
    password: password,
  });
  if (userExists) {
    res.status(404).json({
      message: "User already exists",
    });
  }
  const newUser = new User({
    username: username,
    password: password,
  });

  await newUser.save();
  res.status(200).json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({
    courses: allCourses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;
  const selectedCourse = await Course.findOne({ id: courseId });
  if (!selectedCourse) {
    res.status(404).json({
      message: "Course id is invalid",
    });
  }
  selectedCourse.userThatPurchased = username;
  await selectedCourse.save();
  res.status(200).json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const courses = await Course.find({ userThatPurchased: username });
  res.status(400).json({
    purchasedCourses: courses,
  });
});

module.exports = router;
