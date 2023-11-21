/*
    * IIFE stands for "Immediately Invoked Function Expression." It is a design pattern in JavaScript where a function is defined and executed immediately after being created. This pattern is often used to create a new scope, preventing variable declarations from polluting the global scope.
*/

(function () {
    // Code here is inside the scope of the IIFE
    var localVar = 'IIFE example';
    console.log(localVar);
})();

/* 
    * In this example:

    • (function() {...})(); is the syntax for creating an IIFE.
    •The function is defined inside a set of parentheses (function(){...}).
    • () at the end of the expression immediately invokes the function.
*/

/*
    * Benefits of IIFE:

Encapsulation:

Variables declared inside the IIFE are not accessible from the outside. This helps avoid polluting the global scope.
Avoiding Variable Hoisting:

JavaScript hoists variable declarations to the top of the scope. Wrapping code in an IIFE helps avoid unexpected behaviors due to hoisting.
Creating Private Variables:

Variables declared inside the IIFE are local to the function, creating a way to simulate private variables.
*/

// * Example with parameters

(function (x, y) {
    var result = x + y;
    console.log(result);
})(5, 10);


