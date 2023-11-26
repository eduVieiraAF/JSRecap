
/*
    * Sorting an array
*/

const arr = ["A", "E", "D", "B", "C"]

console.log(arr.sort()) // ["A", "B", "C", "D", "E"]
console.log(arr.reverse()) // ["E", "D", "C", "B", "A"]

// * Sort usually works with strings

// * With numbers

const nums = [12 , 2, 24, 6, 18, 32]

console.log(nums.sort()) // doesn't work and neither does reverse()

console.log(nums.sort((a, b) => a - b)) // [2, 6, 12, 18, 24, 32]
console.log(nums.sort((a, b) => b - a)) // [32, 24, 18, 12, 6, 2]
console.log(nums.sort((a, b) => a - b).reverse()) // [32, 24, 18, 12, 6, 2] this will works

// * With objects

const obj = [
    { name: "Edu Vieira"},
    { name: "Jen Selter"},
    { name: "Tim Smith"},
    { name: "Rob Schwieger"},
    { name: "Joe Doe"},
    { name: "Douglas McCarthy"},
]

console.log(obj.sort()) // doesn't work
console.log(obj.sort((a, b) => a.name.localeCompare(b.name)))
console.log(obj.sort((a, b) => a.name.localeCompare(b.name)).reverse())