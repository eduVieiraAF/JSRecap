let jeans = {
    size: "M",
    color: "blue",
    price: 23,
    inStock: true,
    brand: [
        { name: "Levi's" }, 
        { name: "H&M" },
        { name: "Zara" },
        { name: "Adidas" },
        { name: "Puma" },
        { name: "Reebok" }
    ],
    token: "abc123",
    link: {
        a: "abc",
        b: { c: "def" },
    }
}

console.log(jeans.token)

delete jeans.token
console.log(jeans.token) // undefined
