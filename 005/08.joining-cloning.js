
/*
    * Cloning and joining
    - Cloning: making a copy of an object
    - Joining: combining two or more objects
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
    ]
}

let discountedPrice = {
    level1: jeans.price - ((jeans.price * 7) / 100),
    level2: jeans.price - ((jeans.price * 10) / 100),
}

let clone1 = jeans // shallow cloning and may override values from the original affecting all below

/* 
    * quick fix for the above
    let clone1 = JSON.parse(JSON.stringify(jeans))
    * none of the values from the original will be affected
*/

let clone2 = {...jeans} // deep cloning does not override values from the original and it's safer

/*
    * also safer to use Object.assign with JSON.parse
    let clone2 = JSON.parse(JSON.stringify(discountedPrice))
    let clone3 = Object.assign(JSON.parse(JSON.stringify(discountedPrice)), 
        JSON.parse(JSON.stringify(jeans))) 
*/

let clone3 = Object.assign(discountedPrice, jeans) // deep cloning + joining
let clone4 = {...discountedPrice, ...jeans} // deep cloning + joining 
let clone5 = {discountedPrice, jeans} // deep cloning + joining 
clone1.size = "L"

console.log(clone2)
console.log(jeans) // the original object is modified
