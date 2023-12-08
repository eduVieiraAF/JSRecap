const form = document.forms.namedItem('select-radio');
const submit = document.getElementById('submit');
const change = document.getElementById('change');

// console.log(form);

form.addEventListener('submit', (event) => {
    const radio = form.radio;
    
    event.preventDefault();
    submit.innerHTML = radio.value
    
    // console.log(radio.value);

    // radio.forEach((item) => {
    //     // console.log(item);
    //     if (item.checked){ 
    //     }
    // })
})

form.addEventListener('change', (event) => {
    change.innerHTML = event.target.value
})