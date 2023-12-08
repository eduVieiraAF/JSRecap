'use strict'

const form = document.forms.namedItem('registration')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(form)
    const username = form.username.value
    const password = form.password.value

    console.log(username, password)
})