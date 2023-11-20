// * An object is a collection of properties, methods and atributes


let myObject = {
    name: ['Edu', "Vieira"],
    age: 41,
    isDeveloper: true,
    hobbies: {
        sports: "kung fu",
        movies: "Action",
        music: "Rock"
    },
    link: "https://github.com/eduVieiraAF",
    sayHello: function (name) {
        console.log(`Hello ${name}, my name is ${this.name[0]} ${this.name[1]}`)	
    }
}

console.log(myObject)
console.log(myObject.isDeveloper)
console.log(myObject.hobbies.sports)

myObject.sayHello("Dave")