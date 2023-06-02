// primitives: number, string, boolean, null, undefined, symbol
// more complex types: objects, arrays
// function types, parameters

//1
let age: number;
age = 28;

let userName: string = "Orcun";

let isDeveloper: boolean = true;

// 2
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// 3
// let person: {
//   name: string,
//   age: number,
// };

// person = {
//   name: "Orcun",
//   age: 28,
// };

// // person = {
// //   isBoolean: true,
// // };

// 4
// let people: {
//   name: string,
//   age: number,
// }[];

// 5: type inference 
let course = "React";
// course = 123; gives error.

// 6: union types
let courseId: string | number = "React";
courseId = 123;

// 7: type aliases
type Person = {
  name: string,
  age: number,
};

let person: Person;

let people: Person[];
