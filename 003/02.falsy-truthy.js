
//* Falsy = false, 0, "", NaN, undefined and null
//* Truthy is the oposite of falsy

let hello = NaN | undefined | null

if (!hello) {
    console.log("Hello")
} else { 
    console.log("Bye")
}