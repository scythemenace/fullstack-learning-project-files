const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/files/:fileName", (req, res) => {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, 'utf-8', (err, data) => {
    res.json({
      data
    })
  })
})

app.listen(port, () => {
  console.log(`Server started on ${port}`);
})
