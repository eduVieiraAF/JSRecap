
const obj = [
    { name: "Edu", email: "eD3k7@example.com" },
    { name: "Jen", email: "jD3k7@example.com" },
    { name: "Tim", email: "tD3k7@example.com" },
    { name: "Rob", email: "rD3k7@example.com" },
    { name: "Joe", email: "jD3k8@example.com" },
]

for (let item of obj) {
    if (item.name === "Tim") {
        console.log(`→ one item found: ${item.name} • ${item.email}`)
        // continue // skips the item in the loop and iterates the rest of the loop
        break // stops the loop
    }

    console.log(item)
}
