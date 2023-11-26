

/*
    * Filter 
    it is a method that creates a new array with all elements that pass the test/logic
*/

const obj = [
    { name: "Edu", email: "eD3k7@example.com", age: 41, job: "developer" },
    { name: "Jen", email: "jD3k7@example.com", age: 39, job: "sales manager" },
    { name: "Tim", email: "tD3k7@example.com", age: 37, job: "designer" },
    { name: "Rob", email: "rD3k7@example.com", age: 35, job: "developer" },
    { name: "Joe", email: "jD3k8@example.com", age: 33, job: "accountant" },
]

const devs = obj.filter((item, index) => {
    return item.job === "developer"
})

console.log(devs)