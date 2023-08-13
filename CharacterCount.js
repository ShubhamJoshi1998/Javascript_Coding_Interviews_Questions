// How do you find the count for the occurrence of a particular character in a string?

function countCharacterOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const testString = "Hello, how are you?";
const charToCount = "o";
const occurrenceCount = countCharacterOccurrences(testString, charToCount);
console.log(`Number of occurrences of "${charToCount}": ${occurrenceCount}`); // Output: Number of occurrences of "o": 3


// In this,  countCharacterOccurrences function takes two parameters: the input string (str) 
// and the character you want to count (char). It loops through each character in the input 
// string and checks if it matches the target characte