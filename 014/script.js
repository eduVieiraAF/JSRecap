
const h1 = document.querySelector("h1")

// h1.style.color = "crimson"
h1.style.backgroundColor = "black"
h1.style.fontFamily = "Arial"
h1.style.padding = "10px"

const p = document.querySelectorAll("p")

p.forEach((it) => {
    it.style.fontFamily = "monospace"
    it.style.fontSize = "1.5rem"
    it.style.textAlign = "center"
    it.style.color = "seagreen"
})

// ClassList

setTimeout(() => {
    h1.classList.add("active", "inverted")
},3000)

setTimeout(() => {
    // h1.classList.remove( "inverted")
    if (h1.classList.contains("inverted")) {
        h1.classList.toggle("inverted")
        h1.style.boxShadow = "10px 10px 10px gray"
    }
}, 6000)