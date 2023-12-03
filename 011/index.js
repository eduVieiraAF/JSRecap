

const div = document.querySelector("div")
div.setAttribute('id', 'myDiv')
// div.setAttribute('class', 'myClass')
div.setAttribute('style', 'color: red;')

console.log(div)

setTimeout(() => {
    div.setAttribute('class', `active-${div.getAttribute('class')}`)
    div.setAttribute('style', 'background-color: lightblue;')
    console.log(div.getAttribute('class'))
}, 3000)

// div.removeAttribute('style')

