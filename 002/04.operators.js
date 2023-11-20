
// * Operators: 

// * 1. Arithmetic

let a = 10;
let b = 5;
let c = a + b;

console.log(c);

c = a - b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

// * 2. Remainder
c = a % b;
console.log(c);

// * 3. Increment
let d = 10;
d++;
console.log(d);

// * 4. Decrement
d--;
console.log(d);

// * 5. Exponent
let e = Math.pow(a, b);
console.log(e);

// * 6. Square Root
let f = Math.sqrt(a);
console.log(f);

// * 7. Absolute
let ab = -10;
let absoluteValue = Math.abs(ab);
console.log(absoluteValue);

//* Comparison
// Equal to
console.log(a == b); // false

// Not equal to
console.log(a != b); // true

// Greater than
console.log(a > b); // true

// Less than
console.log(a < b); // false

// Greater than or equal to
console.log(a >= b); // true

// Less than or equal to
console.log(a <= b); // false

// * Logical
let x = true;
let y = false;

// Logical AND
let result1 = x && y;
console.log(result1); // false

// Logical OR
let result2 = x || y;
console.log(result2); // true

// Logical NOT
let result3 = !x;
console.log(result3); // false

if (a > b && x == true) {
    console.log('All is good');
}
