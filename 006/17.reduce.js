/*
    * Reduce iterates an array and reduces it to a single value
*/

const obj = [
    { id: 1, name: "Edu", email: "eD3k7@example.com", age: 30, job: "developer" },
    { id: 2, name: "Jen", email: "jD3k7@example.com", age: 39, job: "sales manager" },
    { id: 3, name: "Tim", email: "tD3k7@example.com", age: 37, job: "designer" },
    { id: 4, name: "Rob", email: "rD3k7@example.com", age: 35, job: "developer" },
    { id: 5, name: "Joe", email: "jD3k8@example.com", age: 33, job: "accountant" },
]

let averageAge = obj.reduce((avg, curr) => {
    return avg + curr.age
}, 0)

averageAge = averageAge / obj.length

console.log(averageAge)