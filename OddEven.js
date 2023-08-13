// How do you check if an integer is even or odd?

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const num1 = 6;
const num2 = 9;

console.log(num1, "is", checkEvenOdd(num1));
console.log(num2, "is", checkEvenOdd(num2));
