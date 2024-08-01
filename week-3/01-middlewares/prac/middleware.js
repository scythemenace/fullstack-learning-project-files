const express = require('express');
const app = express();

const firstMiddleware = (req, res, next) => {
    console.log("Hello");
    next();
}

app.use(firstMiddleware);

const secondMiddleware = (req, res, next) => {
    console.log("In between hello and bye");
    next([1, 2, 3]);
}

app.use(secondMiddleware);

app.get('/', (req, res) => {
    console.log("Bye"); 
    res.send("Final");
})


app.listen(3000)