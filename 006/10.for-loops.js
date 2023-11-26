
const arr = [1, 2, 3, 4, 5, 6]
const obj = [
    { name: "Edu", email: "eD3k7@example.com" },
    { name: "Jen", email: "jD3k7@example.com" },
    { name: "Tim", email: "tD3k7@example.com" },
    { name: "Rob", email: "rD3k7@example.com" },
    { name: "Joe", email: "jD3k8@example.com" },
]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for(let i = 0; i < obj.length; i++) {
    console.log(obj[i])
}

for(let i = 0; i < obj.length; i++) {
    console.log(obj[i].name)
}

// * For in
for(let i in obj) {
    console.log(obj[i])
}

for (let i in arr) {
    console.log(arr[i])
}

// * For of
for(let item of obj) {
    console.log(item)
    // console.log(item.name)
    // console.log(item.email)
}

for(let item of arr) {
    console.log(item)
}
