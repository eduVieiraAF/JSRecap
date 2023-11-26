
/*
    * Slice → fetches elements from an array and returns them
    * Splice → deletes elements from a range of an array and returns them
*/

let arr = [
    { name: "Edu", email: "eD3k7@example.com" },
    { name: "Jen", email: "jD3k7@example.com" },
    { name: "Tim", email: "tD3k7@example.com" },
    { name: "Rob", email: "rD3k7@example.com" },
    { name: "Joe", email: "jD3k8@example.com" },
]

console.table(arr)

const newArr = arr.slice(0, 3)
console.table(newArr)

// arr.splice(0, 3) // removes the first 3 elements
arr.splice(3, 1) // removes the fourth element

console.table(arr)