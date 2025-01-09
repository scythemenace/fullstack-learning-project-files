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

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // ? means it's optional
};

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

// We can also implement interfaces, similar to Java. Interfaces basically are skeletons or boilerplate of a data type
// Here we will try to implement an interface

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("ankur", 20);
console.log(e.name);
e.greet("Bye");

// Unions - similar to OR haskell where we can use two different things to represent a type

type id = string | number; // Id may be a number or a string

// We can also use it inside functions

function greetWithNumberOrStr(phrase: string | number) {
  console.log(`${phrase}`);
}

greetWithNumberOrStr("Hello");
greetWithNumberOrStr(20);

// Intersections - they're similar to the set meaning of "union" even though they're called as intersections

// Let's say we have two types

type Teacher = {
  name: string;
  age: number;
  department: string;
};

type Student = {
  name: string;
  class: string;
};

type teacherAndStudent = Teacher & Student; // Inherently means would have the type of both the teacher and the student
/*
  => type teacherAndStudent = {
    name: string;
    age: number;
    department: string;
    class: string;
  }
*/
