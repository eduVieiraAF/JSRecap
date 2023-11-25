
/*
    * Destructuring
    it is a way to unpack values from arrays or objects    
*/

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

const {size, brand  = "None available", price} = jeans // destructuring → size = jeans.size, brand = jeans.brand, price = jeans.price

console.log(size)
console.log(brand)
console.log(price)

const { token: t } = jeans // destructuring → t = jeans.token using an alias
console.log(t)

const { link: { a } } = jeans; // destructuring → a = jeans.link.a
const { link: { b: { c }} } = jeans; // destructuring → c = jeans.link.b.c
console.log(c)
