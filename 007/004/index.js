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

const allP = document.getElementsByTagName('p')
for (let item of allP) {
    console.log("allP",item)
}

allP[0].style.fontSize = '2rem'
allP[1].style.border = '1px solid black'
allP[2].style.padding = '1rem'