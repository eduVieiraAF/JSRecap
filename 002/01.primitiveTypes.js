/* 
    * Primitive Types
        • not an object therefore it doesn't have methods

    * Primitive Types are:
        • String
        • Number
        • Boolean
        • Undefined
        • Null
*/

// * String
let myString = "Hello, world!";
let addendum = " How are you?";
console.log(myString);

myString = 'Another "string"!';
console.log(myString);

myString = `Yet another "string"!
    This may be multiline.
    ${addendum}
`;

console.log(myString);

// * Number
let myNumber = 42;
console.log(myNumber);

myNumber = 3.14;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = 1 / 0;
console.log(myNumber);

myNumber = NaN;
console.log(myNumber);

myNumber = Infinity;
console.log(myNumber);

console.log("123" + 1)
console.log("123" - 1)

// * Boolean
let myBoolean = true;
console.log(myBoolean);

myBoolean = false;
console.log(myBoolean);

let result = 5 > 3;
console.log(result); // true

result = 10 < 5;
console.log(result); // false

let isTrue = Boolean("hello");
console.log(isTrue); // true

let isFalse = Boolean("");
console.log(isFalse); // false

// * Undefined
let myUndefined;
console.log(myUndefined);
console.log(typeof myUndefined);

// * Null
let myNull = null;
console.log(myNull);
console.log(typeof myNull);
