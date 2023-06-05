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

// 8: functions & types
function add(a: number, b: number) {
  return a + b;
}

function output(value: any) {
  console.log(value);
}

// 9: generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray  = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); now gives error with generics
// stringArray[0].split(''); does not give error