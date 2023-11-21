
/*
    * Arguments are values passed to a function also known as parameters

    functionName(arg1, arg2, arg3) {
        
    }
*/

function sum (a, b) {
    if (typeof a !== 'number' && typeof b !== 'number')  return "Not a number"
    
    return a + b;
}

console.log(sum(10, 40));
console.log(sum(sum(10, 25), sum(40, 35))) // a function can be passed as an argument

// function minus() {
//     return arguments
// }

// console.log(minus(1, true, "string"))

function minus(a = 0, b = 0) {
    if (typeof a !== 'number' && typeof b !== 'number')  return "Not a number"

    return a - b
}

console.log(minus(10, 40));