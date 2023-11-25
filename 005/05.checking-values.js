const jeans = {
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

console.log(jeans.hasOwnProperty('size'))
console.log(jeans.hasOwnProperty('color'))

if (jeans.hasOwnProperty('color')) console.log(jeans.color)
else console.log('No color available')

if (jeans.hasOwnProperty('discount')) console.log(jeans.discount)
else console.log('No discount available')

console.log("test" in jeans)
console.log("inStock" in jeans)