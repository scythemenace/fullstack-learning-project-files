const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db/index.js");
const { Course } = require("../db/index.js");

idStoreObj = {};
const randomIdGen = (idStoreObj) => {
  return Object.keys(idStoreObj).length;
};

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  let adminExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (adminExists) {
    res.status(404).json({
      message: "Admin already exists",
    });
  }
  const newAdmin = new Admin({
    username: username,
    password: password,
  });

  await newAdmin.save();
  res.status(200).json({
    message: "Admin created successfully",
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
