
/*
    * Adding and updating values & properties
        cannot use const because it is immutable so we need to use let
*/

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

jeans.size = "L"
jeans.color = "red"

console.log(jeans)

jeans.discountedPrice = jeans.price - ((jeans.price * 7) / 100) // add a new property
jeans['collection'] = 'Summer' // another way to add a new property
console.log(jeans)