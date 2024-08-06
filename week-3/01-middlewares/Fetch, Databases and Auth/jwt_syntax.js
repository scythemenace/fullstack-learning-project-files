const express = require("express");
const jwt = require("jsonwebtoken");
const port = 3000;
const jwtPassword = "summthing@12345";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

const userExists = (username, password) => {
  let userDoesExist = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i]["username"] == username &&
      ALL_USERS[i]["password"] == password
    ) {
      userDoesExist = true;
    }
  }

  return userDoesExist;
};

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(407).json({
      msg: "User doesn't exist in our memory db",
    });
  }

  let token = jwt.sign({ username: username }, jwtPassword);
  res.json({ token });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json(
      ALL_USERS.filter((data) => {
        return data.username != username;
      }),
    );
  } catch (err) {
    res.json({
      msg: "Invalid JSON token",
    });
  }
});

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
