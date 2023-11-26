'use strict'

const h1 = document.querySelector('h1')
// const p = document.querySelectorAll('p') // selecting ALL TAGS
const classP = document.querySelector('.paragraph') // selecting class
const idP = document.querySelector('#paragraph') // selecting id

const strong1 = document.querySelector('.paragraph strong')
const strong2 = document.querySelector('#paragraph strong')

const strong3 = classP.querySelector('strong')

console.log(strong1)
console.log(strong2)
console.log(strong3)

setTimeout(() => {
    strong1.style.color = "blue"
    strong2.style.color = "crimson"
    idP.style.backgroundColor = "gray"
    classP.style.backgroundColor = "gray"
}, 3000)

const title = document.querySelector('title')

let timer = 0
setInterval(() => {
    title.innerText = timer
    timer++
}, 1000)
