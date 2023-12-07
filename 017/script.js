'use strict'

const link = document.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Link was clicked but stopped', event)
})