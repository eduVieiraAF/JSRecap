
/* 
    * A function: 
    • is a block of code that performs a specific task;
    • it can be called multiple times;
*/

// * Function declaration
function myFunction() {
    let a = 10;
    let b = 20;
    const sum = a + b;

    console.log('Hello World!');

    if (sum < 100) console.log(sum);
}

// * Function call
myFunction();

let _name = 'Edu';

if (_name === 'Edu') myFunction();
else console.log('Hello, stranger!');
    
// * Function expression   
const myFunction2 = function() {
    console.log('Hello, World! - again');
};

myFunction2();