
/*  
    * Scope
    determines the visibility of variables and functions
    limits data access and visibility to the right part of the program

*/

let globalName = 'Edu' // global scope
console.log(globalName)

if (true) {
    let localName = 'Edu' // local scope
    console.log(localName)
    console.log(globalName) //? can be accessed
}

//! console.log(localName)  can't be accessed

