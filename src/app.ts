// const - cannot be reassigned
const userName = "Andrea";

// let - can be reassigned
let age = 28;
age = 29;

// var - can be reassigned, but it's not recommended, because it's not block scoped
/*  This works in JavaScript, but not in TypeScript, because TypeScript is more strict, and doesn't compile this code
if (age > 20) {
  var isOld = true;
}
console.log(isOld);
*/

// ------

// arrow function - shorter syntax for defining functions
const add = (a: number, b: number) => {
  return a + b;
};
const addShortExpressionn = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

// default parameters
const addDefault = (a: number, b: number = 1) => a + b;

// ------

// spread operator - with arrays
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
// spread operator - used to pull out all elements of an array
activeHobbies.push(...hobbies);

// spread operator - with objects
const person = {
  name: "Andrea",
  age: 28,
};
// we are coping the person object into a new object
const copiedPerson = { ...person };

// rest parameters - used to merge a list of function arguments into an array
const addWithRest = (...numbers: number[]) => {
  // reduce() - used to reduce the array to a single value, by executing a provided function for each element
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = addWithRest(5, 10, 2, 3.7);
console.log(addedNumbers);

// ------

// array & object destructuring - pull out single elements or properties and store them in variables
// doesn't change the original array or object
// array destructuring
/*
const hobbie1 = hobbies[0];
const hobbie2 = hobbies[1];
*/
const [hobbie1, hobbie2, ...remainingHobbies] = hobbies;
// object destructuring
// the type of the properties must be the same as the type of the variables
const { name: userNameDestructured, age: userAgeDestructured } = person;
