'use strict'

const ul = document.querySelector('ul')
const fragment = document.createDocumentFragment()

console.log(ul)

const foods = [
    "pizza",
    "hamburger",
    "sushi",
    "pasta",
    "salad",
    "ice cream",
    "cake",
    "soda",
    "water",
    "coffee",
]

foods.forEach(food => {
    const li = document.createElement('li')
    li.textContent = food
    // ul.append(li) // uses lots of memory
    fragment.append(li)
})

ul.append(fragment)

console.log(fragment)