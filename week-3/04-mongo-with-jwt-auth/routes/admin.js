const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const router = Router();
const { Admin, Course } = require("../db/index.js");
const jwtPassword = require("../token.js");

idStoreObj = {};
const randomIdGen = (idStoreObj) => {
  return Object.keys(idStoreObj).length;
};
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const adminExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (adminExists) {
    res.status(409).json({
      message: "Admin already exists",
    });
  }
  const token = jwt.sign(
    { username: username, password: password },
    jwtPassword,
  );
  const newAdmin = new Admin({
    username: username,
    password: password,
    token: token,
  });

  await newAdmin.save();
  res.status(200).json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const { username, password } = req.body;
  const adminExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (adminExists) {
    return res.status(200).json({
      token: adminExists.token,
    });
  }
  res.status(404).json({
    message: "Admin doesn't exist",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let { title, description, price, imageLink } = req.body;
  let id = randomIdGen(idStoreObj);
  idStoreObj[id] = "";
  let newCourse = new Course({
    id: id,
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: true,
    userThatPurchased: "",
  });

  await newCourse.save();
  res.status(200).json({
    message: `Courses created successfully, courseId: ${id}`,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({ courses: allCourses });
});

module.exports = router;
