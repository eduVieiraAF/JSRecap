
// * Recap on objects
// properties | attributes | methods

let shoes = {
    type: 'running shoes',
    shoeLace: true,
    inStock: false,
    size: {
        inSoles: 8,
        shoe: 8.5,
    },
    box: {
        height: 9,
        width: 10,
        depth: 10
    },
    colors: ["blue-gray", "red-black", "orange-teal"],
    sell: function() {
        if (this.inStock) {
            console.log("Ready to sell.")

            for (let i = 0; i < shoes.colors.length; i++) {
                console.log(shoes.colors[i])
            }
        }
        else console.log("Not in stock.")
    }
}

console.log(shoes.box.height)
console.log(shoes.size.inSoles)

shoes.inStock = true
shoes.sell()

