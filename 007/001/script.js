'use strict'

const h1 = document.querySelector('h1')

setTimeout(() => {
    h1.textContent = 'DOM 101'
    h1.style.color = 'crimson'
    h1.style.fontSize = '5rem'
    h1.style.backgroundColor = 'black'
}, 3000)

