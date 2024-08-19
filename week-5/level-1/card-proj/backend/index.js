const express = require("express");
const port = 3000;
const cardModel = require("./config/db");
const { cardType } = require("./config/types");
const { idType } = require("./config/types");
const { mongoose } = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5713",
  })
);

app.get("/getCards", async (req, res) => {
  const cards = await cardModel.find({});
  return res.status(200).json(cards);
});

app.post("/addCard", async (req, res) => {
  const payload = req.body;
  const inputVerification = cardType.safeParse(payload);
  if (!inputVerification.success) {
    return res.status(411).json({
      message: "Wrong Input Types",
    });
  }

  const newCard = new cardModel({
    name: payload.name,
    description: payload.description,
    socialmedia: [],
  });

  payload.socialmedia.map((handles) => {
    for (link in handles) {
      let temp_obj = {};
      temp_obj[link] = handles[link];
      newCard.socialmedia.push(temp_obj);
    }
  });
  newCard.markModified("socialmedia");

  payload.interests.map((interest) => {
    newCard.interests.push(interest);
  });

  newCard.markModified("interests");

  await newCard.save();

  return res.status(200).json({
    message: "Card created successfully",
  });
});

app.delete("/deleteCard", async (req, res) => {
  const id = req.body;
  const inputVerification = idType.safeParse(id);
  if (!inputVerification.success) {
    return res.status(411).json({
      message: "Wrong Input Types",
    });
  }

  const idToDelete = new mongoose.Types.ObjectId(id);

  await cardModel.deleteOne({
    _id: idToDelete,
  });

  res.status(200).json({
    message: "Card deleted",
  });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
