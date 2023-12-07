
const strong = document.querySelector('strong')
const div = document.querySelector('.container')
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
const firstChild = div.firstElementChild
console.log(firstChild)

const lastChild = div.lastElementChild
console.log(lastChild)