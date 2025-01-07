// Basic intro to typescript

let x: number = 1;

// x = "ankur" -- reassigning gives an error since the type is a number

console.log(x);

// Creating a basic function which outputs hello world

function helloWorld(firstName: string): void {
  console.log(`Hello ${firstName}`);
}

helloWorld("Ankur");

// Creating a basic function that returns the sum of two numbers

function sum(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

let outputVal = sum(10, 23);

console.log(outputVal);

// Creating a function that takes another function as input and runs it after one second

// func : () => some type is the syntax to denote the type of a function. 'some type' could be anything

const runAfterOneSec = (func: () => void): void => {
  setTimeout(func, 1000);
};

runAfterOneSec(() => {
  console.log("Hello World");
});

// Using interfaces - basically a skeleton of what an object should be and it can be used in multiple places (avoids violation of the dry rule)

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // ? means it's optional
}

const isLegal = (user: User): boolean => {
  return user.age >= 18 ? true : false;
};

const greet = (user: User): void => {
  console.log(`Hello ${user.firstName}`);
};

// Above we used the interface user twice to create two different functions based on different members of user

console.log(
  isLegal({
    firstName: "Ankur",
    lastName: "Pandey",
    age: 20,
  }),
);

greet({
  firstName: "Dev",
  lastName: "Malik",
  age: 20,
});
