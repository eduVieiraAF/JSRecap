
function Person(name, age, email) {
    this.name = name
    this.age = age
    this.email = email

    this.greet = () => {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const person = new Person("Edu", 41, 'edu@edu.net')

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.email)

const person2 = new Person("Edu2", 42, 'edu2@edu.net')

console.log(person2)
console.log(person2.email)

person2.greet()