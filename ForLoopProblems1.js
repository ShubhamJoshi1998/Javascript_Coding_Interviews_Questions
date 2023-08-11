
// Find the issue in the below code snippet.

let counter = 0;
for (var i = 1; i <= 10; i++) {
    counter += i;
}
console.log(counter);
console.log(i);


// The issue in the code snippet is related to variable scope.

//In JavaScript, when we use the var keyword to declare a variable,
// it has function-level scope, not block - level scope.This means that
// the variable i declared using var inside the for loop is accessible 
// outside the loop as well.