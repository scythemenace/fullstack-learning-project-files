const express = require("express");
const app = express();

app.use(express.json());
/*This idea behind this file is that if something goes wrong in our
backend, we must provide a user-friendly message to the user.*/

// Regular middleware
app.use((req, res, next) => {
  console.log("Regular Middleware");
  next(); // Pass control to the next handler
});

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = req.kidneys.length;

  res.send(
    "You have " + kidneyLength + " kidneys " + "and they look like " + kidneys,
  );
});

// Route that causes an error
app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong!");
  next(err); // Pass the error to the error handling middleware
});

//Global Catches

//Error handling middleware that consists of the "err" keyword
/*The basic idea behind this is that this is the last middleware in our code and uses a special argument called "err" or anything
 you want to name it for eg. "error", etc. so if anything goes wrong with the server the js program knows that it has to be directed
 over here.

 NOTE: The next() keyword can be called in general to direct something to different middlwares, but passing any argument in it
 indicates it that must be passed straight to the error handling middlware. "err" is just a placeholder for any error. Look at 
 the zod-input-valudation.js file for more info about this.

 The "next" keyword is there to chain a bunch of error handlers. It'll reach the first error handler and you can deecide from there on
 what to do with it*/

app.use((err, req, res, next) => {
  res.json({
    msg: "Sorry something's up with our server",
  });
});

app.listen(3000);
