import {
  someValue as someValueFromMain2,
  operationFromMain2,
} from "./main2.js";

console.log("main.3");

export function minus(a, b) {
  console.log(a - b);
  return a - b;
}

export function sum(a, b) {
  console.log(a + b);
  return a + b;
}

const someValue = "main3 some Value";
const operation = "main3 operation";

export default function logValue() {
  console.log(someValue);
}

console.log(someValueFromMain2, operation);

// export { minus, sum };

// export default logValue;
