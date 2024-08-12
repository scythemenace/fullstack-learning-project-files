var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 3000;

app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/connection', (req, res) => {
  res.send("Hello world");
})

app.get('/connection', (req, res) => {
  res.send("Nothing");
})

app.listen(port, () => {
  console.log(`Started execution on port ${port}`);
});