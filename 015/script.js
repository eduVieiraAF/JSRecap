
const strong = document.querySelector('strong')
const div = document.querySelector('.container')
const h1 = document.querySelector('h1')
// console.log(strong.parentElement)
// console.log(strong.parentNode)
// console.log(div.parentNode)


// console.log(document.documentElement.parentNode)

// console.log(div.childNodes)
// console.log(div.children)

// const child = Array.from(div.children)
// for (let i = 0; i < child.length; i++) {
//     console.log(child[i])
// }

// const firstChild = div.firstChild
// const firstChild = div.firstElementChild
// console.log(firstChild)

// const lastChild = div.lastElementChild
// console.log(lastChild)

// const nextSibling = h1.nextElementSibling
// const previousSibling = div.previousElementSibling

// console.log(nextSibling)
// console.log(previousSibling)

const newTitle = document.createElement('h1')
newTitle.textContent = 'Hello World'
div.appendChild(newTitle)

