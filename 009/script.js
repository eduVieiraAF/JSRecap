
const div = document.querySelector('div')
console.log(div)

// * Easier sintax
// div.innerHTML = '<h1>innerHTML && createElement</h1><p>Opera is <strong>good</p></strong>'
// div.innerHTML += '<h1>innerHTML && createElement</h1><p>Opera is <strong>good</p></strong>'
// div.innerHTML =  `${div.innerHTML} <h1>innerHTML && createElement</h1><p>What up</p>`

//* better performance
const ul = document.createElement('ul')

const arr = [1, 2, 3]
arr.forEach(element => {
    const li = document.createElement('li')

    // li.textContent = element
    li.innerText = element
    ul.appendChild(li)
});
console.log(ul)
div.appendChild(ul)

