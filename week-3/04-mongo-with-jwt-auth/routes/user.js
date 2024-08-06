const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const jwtPassword = require("../token.js");
const { User, Course } = require("../db/index.js");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const userExists = await User.findOne({
    username: username,
    password: password,
  });
  if (userExists) {
    res.status(409).json({
      message: "User already exists",
    });
  }
  const token = jwt.sign(
    { username: username, password: password },
    jwtPassword,
  );
  const newUser = new User({
    username: username,
    password: password,
    token: token,
  });

  await newUser.save();
  res.status(200).json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement user signin logic
  const { username, password } = req.body;
  const userExists = await User.findOne({
    username: username,
    password: password,
  });
  if (userExists) {
    return res.status(200).json({
      token: userExists.token,
    });
  }
  res.status(404).json({
    message: "User doesn't exist",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({ courses: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const token = req.headers.authorization;
  console.log(token);
  const decoded = jwt.decode(token);
  const username = decoded.username;
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
  const token = req.headers.authorization;
  const decoded = jwt.decode(token);
  const username = decoded.username;
  const courses = await Course.find({ userThatPurchased: username });
  res.status(200).json({
    purchasedCourses: courses,
  });
});

module.exports = router;
