/*
    * Event Delegation
    it is a pattern that allows you to listen to events on a parent element
    and then trigger the same event on all the child elements

    it helps with performance
*/
/*
const home = document.querySelector(".home")

home.addEventListener("click", () => {
    console.log("home")
})

const about = document.querySelector(".about")

about.addEventListener("click", () => {
    console.log("about")
})

const contact = document.querySelector(".contact")

contact.addEventListener("click", () => {
    console.log("contact")
})
*/

// * the code above is not very performant due to the number of event listeners

const menu = document.querySelector("#menu")
// console.log(menu)

menu.addEventListener("click", (event) => {
    const { target } = event

    // console.log(target.getAttribute("class"))
    // console.log(currentTarget)

    switch (target.getAttribute("class")) {
        case "home":
            console.log("home")
            target.innerHTML = "Changed"
            break
        case "about":
            console.log("about")
            break
        case "contact":
            console.log("contact")
            break
        default:
            break
    }

})