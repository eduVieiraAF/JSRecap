
myArray = ['Edu', 41, 'dev', true]

console.log(myArray)
console.log(myArray[3])
console.log(myArray.length)

myArray.forEach((it, index) => {
    console.log(`• ${index} → ${it}`)
});