// axios vs fetch

const axios = require("axios");

// GET
/*
fetched using fetch

function get() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
    const json = await response.json();
    console.log(json.todos.length);
  });
}
*/

// fetched using axios
async function get() {
  const response = await axios.get("https://sum-server.100xdevs.com/todos");

  /* axios returns a response.data which holds everything there i.e. we don't
  have to explicitly await it using .json(). It's a much smarter library and 
  already understands what type of data is incoming and parses it accordingly.*/
  console.log(response.data.todos.length);
}

get();

// POST

/*
async function post() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    method: "POST", // You can change it to any method for different routes for eg. GET(default), PUT, DELETE
  });

  const json = await response.json();
  console.log(json.todos.length);
}
*/

async function post() {
  // This is much more convenient, just keep changing the methods for different routes, instead of the complicated way which fetch provides you
  const response = await axios.post("https://sum-server.100xdevs.com/todos");

  console.log(response.data.todos.length);
}

post();

// POST with some body
/*
async function postWBody() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    method: "POST",
    body: {
      username: "harkirat",
      password: "1235",
    },
    headers: {
      Authorization: "Bearer 132",
    },
  });

  const textualData = await response.text();
  console.log(textualData);
}
*/

// AXIOS
async function postWBody() {
  const response = await axios.post(
    "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
    {
      username: "harkirat",
      password: "1235",
    },
    {
      headers: {
        Authorization: "Bearer 132",
      },
    },
  );
  console.log(response.data);
}

postWBody();
