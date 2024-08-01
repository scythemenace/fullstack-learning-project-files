const request = require("supertest");
const assert = require("assert");
const express = require("express");
const { number } = require("zod");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user_id'
// You have been given a numberOfRequestsForUser object to s_t off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

const rateLimiter = (req, res, next) => {
  let user_id = req.headers["user-id"];

  if (!numberOfRequestsForUser[user_id]) {
    numberOfRequestsForUser[user_id] = 0;
    //console.log("Intialized for", user_id, "and req:", numberOfRequestsForUser);
    next();
  }

  if (numberOfRequestsForUser[user_id] >= 5) {
    //console.log("Out of bounds for", user_id, "and req:", numberOfRequestsForUser);
    res.status(404).json({
      msg: "out of bounds"
    });
    return;
  }

  numberOfRequestsForUser[user_id]++;
  //console.log("Updated count for user id for", user_id, "and req:", numberOfRequestsForUser);
  next();
};

app.use(rateLimiter);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

/*
app.listen(3000, () => {
  console.log("Listening to port ");
});
*/

module.exports = app;
