// How do you reverse an array?

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// reverse() method modifies the original array by reversing the order of its elements.


// NOTE : If you want to reverse a copy of the array without modifying the original array,
// you can create a copy first and then use the reverse() method.


const originalArray1 = [1, 2, 3, 4, 5];
const reversedArray1 = [...originalArray1].reverse();

console.log(reversedArray1); // Output: [5, 4, 3, 2, 1]
console.log(originalArray1); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)


// Without Js method

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at left and right indices
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      // Move the pointers towards the center
      left++;
      right--;
    }
  
    return arr;
  }
  
  const originalArray3 = [1, 2, 3, 4, 5];
  const reversedArray3 = reverseArray(originalArray);
  
  console.log(reversedArray3); // Output: [5, 4, 3, 2, 1]
  