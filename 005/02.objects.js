
function Mobile(brand, inStock, price) { // this is a constructor or a class which will return a new object
    return {
        // brand: brand,
        brand, // equivalent as it has the same name
        inStock: inStock,
        price: `$ ${price}`,
        sell: function () {
            if (this.inStock) console.log("Ready to sell.")
            else console.log("Not in stock.");
        }
    }
}

// console.log(Mobile("Apple", true, 1000));

const iphone = new Mobile("Apple", false, 1000); // this is an object

console.log(iphone.price);
iphone.sell();