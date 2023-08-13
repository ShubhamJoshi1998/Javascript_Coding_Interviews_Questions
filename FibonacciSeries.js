// How do you print a Fibonacci sequence using recursion?

function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const sequence = fibonacci(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
}

const n = 10; // Change this to the desired number of Fibonacci numbers
const fibSequence = fibonacci(n);
console.log(fibSequence);
