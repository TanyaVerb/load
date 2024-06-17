// import someFoo, * as foo from "./main3.js";
import someFoo, { minus, sum } from "./main3.js";
import {
  someValue as someValueFromMain2,
  operationFromMain2,
} from "./main2.js";

console.log("main.1");
minus(100, 1);
sum(50, 20);
someFoo(); //может быть только один
