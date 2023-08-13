// How do you find out if the two given strings are anagrams?

function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Check if lengths are equal
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Count character frequencies
  const charCount = {};

  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // Check if all character frequencies are zero
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("hello", "world"));    // Output: false

//Remove any non-alphabetic characters and convert the strings to lowercase to ensure accurate comparison.
// Check if the lengths of the two strings are equal. If they're not, they cannot be anagrams.
// Count the frequency of each character in both strings and compare the character frequencies.