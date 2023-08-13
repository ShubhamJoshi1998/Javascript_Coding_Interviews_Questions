// How do you determine if a string is a palindrome in js

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  const testString1 = "racecar";
  console.log(isPalindrome(testString1)); // Outputs: true
  
  const testString2 = "hello";
  console.log(isPalindrome(testString2)); // Outputs: false
  

 // Another way without using js methods 

  function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const testString3 = "racecar";
  console.log(isPalindrome(testString3)); // Outputs: true
  
  const testString4 = "hello";
  console.log(isPalindrome(testString4)); // Outputs: false
  