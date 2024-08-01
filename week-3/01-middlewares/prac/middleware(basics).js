const express = require("express");

const app = express();

/*
Middlewares are essentially any code that is between the request and response of the server.
Even the code that we write in the app.get() or app.post() before sending a response is a middleware itself.
*/

/*

Showcasing what are middlewares using a bad way to do authentication

app.get("/", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "ankur" || password != "pass") {
    res.status(400).json({
      msg: "Something's wrong with your inputs",
    });
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "Something's wrong with your kidneyId's",
    });
  }

  res.json({
    msg: "Your kidney is fine!",
  });
});
*/

//  ----------------------NEXT-------------------------

/*
As we know middlewares are kind of pre-checks that help
you validate if the request can use the main backend logic

The way to do this is that we "chain" separate functions
together

They work in a similar fashion to linkedlists, control reaches
the first function and then if it passes the first middleware
check we can make it go to the next function (like how the next*
pointer works in a linked list)

A basic way of how this works is shown below:- 

app.get('/', (req, res, next) => {
  console.log("First middeware check passed")
  next();
}, (req, res) {
  console.log("Final logic")
} )

Let's showcase this functionality using the prev example but
using the new syntax

function userMiddleware(req, res, next) {
  if(username != "ankur" && password = "pass") {
    res.status(400).json({
      msg: "Incorrect username or password"
    });
  } else {
      next();
  }
};

function kidneyMiddlerware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs"
    })
  } else {
    next();
  }
}

app.get('/', userMiddleware, kidneyMiddlerware, (req, res) => {
  console.log("Passed all checks");
  res.json({
    msg: "Your kidneys are fine"
  })
})

The above line can be simplified through app.use()
app.use(userMiddleware)
app.use(kidneyMiddlerware)

This basically makes sure the actual api endpoints first
pass the middleware checks before executing their logic

*/

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
