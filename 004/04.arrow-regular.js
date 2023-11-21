// Regular Functions:
// 1. Syntax:

function add(a, b) {
    return a + b;
}
// 2. this Binding:
// The this value is dynamically scoped in regular functions. Its value depends on how the function is invoked.

const _obj = {
    value: 42,
    getValue: function () {
        return this.value;
    }
};

console.log(obj.getValue()); // Outputs: 42

const _getValue = _obj.getValue;
console.log(_getValue()); // Outputs: undefined (or the global object in non-strict mode)

// 3. arguments Object:
// Regular functions have an arguments object, which is an array - like object containing all the passed arguments.

function printArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

printArguments(1, 'two', true);
// Outputs:
// 1
// two
// true

// * Arrow Functions:
// 1. Syntax:

const add = (a, b) => a + b;

// 2. this Binding:
// Arrow functions do not have their own this value.They inherit this from the enclosing scope, known as lexical scoping.


const obj = {
    value: 42,
    getValue: function () {
        return () => this.value;
    }
};

const getValue = obj.getValue();
console.log(getValue()); // Outputs: 42

// 3. No arguments Object:
// Arrow functions do not have their own arguments object.However, you can use the rest parameter syntax(...args) to gather arguments.

const printArguments = (...args) => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
};

printArguments(1, 'two', true);
// Outputs:
// 1
// two
// true

/*
* Considerations:
this Binding:

Arrow functions are often preferred when dealing with functions that are part of an object and need to access the object's properties.
Regular functions might be preferred in scenarios where this needs to be dynamically bound.
arguments Object:

If you need to work with the arguments object, a regular function is necessary.
Clarity and Conciseness:

Arrow functions are concise and often result in cleaner code, especially for short, simple functions.
Regular functions might be preferred when writing longer, more complex functions.
In summary, the choice between arrow functions and regular functions depends on the specific requirements and context of your code.Each has its own use cases, and understanding their differences allows you to choose the appropriate one for a given situation.
*/