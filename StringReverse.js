// How do you reverse a string?

// Through Reverse Method - 
let str = "Shubham Joshi";

console.log(str.split("").reverse().join(""));

// Without Reverse Method - 
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const originalString = "Hello, excited to revrse a string!";
  const reversedString = reverseString(originalString);
  console.log(reversedString); 