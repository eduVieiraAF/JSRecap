'use strict';

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     alert('clicked');
// })

// function clickHandler() {
//     alert('clicked');
// }

// btn.addEventListener('click', clickHandler);

btn.addEventListener('mouseover', () => {
    btn.innerText = 'Mouse Over';
})

btn.addEventListener('mouseout', () => {
    btn.innerText = 'Mouse Out';
    setTimeout(() => {
        btn.innerText = 'Alert';
        // btn.removeEventListener('click', clickHandler);
    }, 1500)
})