// How do you find the maximum element in an array?

function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Handle the case of an empty array
  }

  let max = arr[0]; // Assume the first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger element is found
    }
  }

  return max;
}

const numbers = [12, 45, 6, 23, 89, 34, 76];
const maxNumber = findMax(numbers);

console.log(maxNumber); // Output: 89


// Thorugh JS method

// Math.max.apply()

const numbers1 = [12, 45, 6, 23, 89, 34, 76];
const maxNumber1 = Math.max.apply(null, numbers1);

console.log(maxNumber); // Output: 89

//        Spread Operator

// Math.max.apply(null, numbers) finds the maximum value in the numbers 
// array by applying the Math.max() function to the array elements. 
// The apply() function is used to pass the array elements as individual 
// arguments to the Math.max() function.

const numbers2 = [12, 45, 6, 23, 89, 34, 76];
const maxNumber2 = Math.max(...numbers2);

console.log(maxNumber); // Output: 89

// Using the spread operator eliminates the need for apply() and simplifies the syntax.





