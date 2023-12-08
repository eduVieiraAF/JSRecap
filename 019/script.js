'use strict'

const form = document.forms.namedItem('registration')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(form)
    const username = form.username.value
    const password = form.password.value


    // if (username && password) {
    //     console.log(username, password)

    //     form.submit()
    //     form.reset()
    // }

    // const formData = new FormData(form)
    const formData = new FormData()

    formData.set('username', username)
    formData.set('password', password)

    if (formData.has('username') && formData.has('password')) {
        formData.forEach(res => {
            console.log(res)
            // console.log(formData.get('username'))
        })
    }

    form.reset()
    deleteForm(formData)
})

function deleteForm(formData) {
    formData.delete('username')
    formData.delete('password')
}