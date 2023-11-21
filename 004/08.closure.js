/*
    * Closure
    it's a function that occours inside another function
    it's declared inside another function - an inner function
    it references local variables from the outer function
*/

function findOutName(name) {
    const msg = `Your name is`

    function callName() { // inner function which cannot be accessed from oustide the outer function
        return `${msg} ${name}`
    }

    return callName()
}

// console.log(findOutName('Edu'))


function calculator(num1, num2) {
    const msg = "The result is"

    const sum = () => `${msg} ${num1 + num2}`
    const sub = () => `${msg} ${num1 - num2}`
    const mul = () => `${msg} ${num1 * num2}`
    const div = () => `${msg} ${num1 / num2}`

    return {
        sum: sum(), // it's an object so we can return it and use it (even though it's an inner function)
        sub: sub(),
        mul: mul(),
        div: div()
    }
}

console.log(calculator(10, 5).sum)
console.log(calculator(10, 5).div)
console.log(calculator(10, 5))