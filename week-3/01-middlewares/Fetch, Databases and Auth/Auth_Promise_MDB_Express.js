const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(express.json());

//NOTE: The connect part can be done without a promise but it's better to do it this way since it's an async call.
//It can also be done using an async function but in this case we chose to do it using promise.
//The reason it's can be done without a Promise/async func as we wrote in the first line is because we are making
//the app.post() an async function which waits for everything in the main thread to run first before proceeding to it.
const connectToDb = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      "mongodb+srv://pankur216:L4oqQ2mG1SdZ5k72@cluster0.goqdl4x.mongodb.net/auth_test?retryWrites=true&w=majority&appName=Cluster0",
    );
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
    });
    const cUser = mongoose.model("Users", userSchema);
    resolve(cUser);
  });
};

connectToDb().then((userConnect) => {
  const User = userConnect;

  app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ name: username });
    if (existingUser) {
      res.status(404).send("Username already exists");
    }

    const user = new User({
      name: username,
      email: email,
      password: password,
    });

    await user.save();

    res.status(200).json({
      msg: `User with the username: ${username}, password: ${password} added`,
    });
  });

  app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
  });
});
