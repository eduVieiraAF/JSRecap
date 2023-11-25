
// * Accessing values from an object

const jeans = {
    size: "M",
    color: "blue",
    brand: "Levi's",
    price: 23,
    inStock: true
}

let discountedPrice = jeans.price - ((jeans.price * 7) / 100)

console.log(jeans.size)
console.log(jeans.color)
console.log(discountedPrice)
console.log(typeof jeans)
console.log(typeof jeans.inStock)