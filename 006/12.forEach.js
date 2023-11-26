
const obj = [
    { name: "Edu", email: "eD3k7@example.com" },
    { name: "Jen", email: "jD3k7@example.com" },
    { name: "Tim", email: "tD3k7@example.com" },
    { name: "Rob", email: "rD3k7@example.com" },
    { name: "Joe", email: "jD3k8@example.com" },
]

obj.forEach((item, index) => {
    if (item.name === "Tim") {
        console.log(`→ one item found: ${item.name} • ${item.email} at index ${index}`)
        // continue and break are not supported
        return

        // return console.log(`→ one item found: ${item.name} • ${item.email} at index ${index}`) 
    }

    console.log(`${index} • ${item.name} @ ${item.email}`)
})