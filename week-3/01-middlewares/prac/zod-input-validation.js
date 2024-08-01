const express = require("express");
const z = require("zod");
const app = express();

/*Essentially the schema syntax written below is not validating anything it's just
definiting it
*/
/*
To check if the input is an array and inside the array each element is a number
const schema = z.array(z.number());
*/

/*
To check for more complex inputs which are objects
const schema = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
  kidneys: z.array(z.number()),
});
*/

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(9),
});

app.use(express.json());

app.post("/auth-check", (req, res, next) => {
  const auth = req.body;
  const response = schema.safeParse(auth);
  if (!response.success) {
    const err = new Error("Validation Failed");
    next(err);
  } else {
    res.send({
      response,
    });
  }
});

//Error passing middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({
    msg: "Error",
    error: err.message,
    details: err.details || [],
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
