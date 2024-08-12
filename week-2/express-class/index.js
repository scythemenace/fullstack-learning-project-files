const express = require("express")
const app = express();
const port = 3000;

app.use(express.json());

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnsKidneys = users[0].kidneys;
  const numOfKidneys = users[0].kidneys.length;
  const numOfHealthyKidneys = users[0].kidneys.filter((obj) => {
    return obj.healthy;
  }).length;
  const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
  res.json({
    johnsKidneys,
    numOfKidneys,
    numOfHealthyKidneys,
    numOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "done",
  });
});

app.put("/", (req, res) => {
  users[0].kidneys.forEach((obj) => {
    obj.healthy = true;
  });
  res.json({});
});

app.delete("/", (req, res) => {
  const healthyArray = users[0].kidneys.filter((obj) => {
    return obj.healthy == true;
  });
  if (healthyArray.length == users[0].kidneys.length) {
    res.status(411).json({
      msg: "you have no bad kidneys",
    });
  }
  users[0].kidneys = healthyArray;
  res.json({});
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
