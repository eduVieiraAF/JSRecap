'use strict'

const form = document.forms.namedItem('select')
const submit = document.getElementById('submit')
const change = document.getElementById('change')

let checkedValues = []

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkedValues = []
    const checkbox = form.vehicle
    // console.log(checkbox)

    checkbox.forEach((element) => {
        if (element.checked) {
            // console.log(element.value)
            checkedValues.push(element.value)
        }
    })

    // console.log(checkedValues)
    checkedValues.sort()
    submit.textContent = checkedValues
})

form.vehicle.forEach((element) => {
    element.addEventListener('change', (event) => {
        hasChecked(event, element)
        checkedValues.sort()
        change.innerHTML = checkedValues
    })
})

const hasChecked = (event, element) => {
    const { target } = event

    if (target.checked) return checkedValues.push(element.value)
    if (!target.checked) return checkedValues.map((checkedValue, index) => {
        if (element.value === checkedValue) return checkedValues.splice(index, 1)
    })
}
