'use strict'

const idP = document.getElementById('paragraph1')
console.log(idP)

const classP = document.getElementsByClassName('paragraph')
console.log(classP)

// classP.forEach(element => {
//     console.log(element)
// }) → does not work for HTMLCollection ↓

for (let item of classP) {
    console.log(item)
}

idP.style.color = 'blue'
classP[0].style.color = 'crimson'
classP[1].style.color = 'crimson'

