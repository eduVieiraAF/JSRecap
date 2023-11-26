"use strict"

const allP = document.querySelectorAll('p')
console.log(allP)

const allStrong = document.querySelectorAll('strong')
console.log(allStrong)

allP.forEach((element, index) => {
    console.log(index, element)

    if (index === 0) {
        element.style.color = 'blue'
        element.style.fontSize = '2rem'
    }

    if (index === 1) {
        element.style.color = 'crimson'
        element.style.border = '1px solid black'
        element.style.padding = '1rem'
    }
});