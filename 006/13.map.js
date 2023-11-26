
/*
    * Map iterates an array and changes values/elements
*/

const obj = [
    { name: "Edu", email: "eD3k7@example.com", age: 41 },
    { name: "Jen", email: "jD3k7@example.com", age: 39 },
    { name: "Tim", email: "tD3k7@example.com", age: 37 },
    { name: "Rob", email: "rD3k7@example.com", age: 35 },
    { name: "Joe", email: "jD3k8@example.com", age: 33 },
]

obj.map((item, index) => {
    // console.log(`${index} - ${item.name} | @ ${item.email}`)
    if (item.name === "Tim") {
        return item.email = "timD3k7@example.com"
    }
})

console.log(obj)