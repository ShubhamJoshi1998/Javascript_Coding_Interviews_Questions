// How do you calculate the number of vowels and consonants in a string?

function countVowelsAndConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Test case
const inputString = "Hello World";
const counts = countVowelsAndConsonants(inputString);
console.log("Vowels:", counts.vowels);
console.log("Consonants:", counts.consonants);


// In this, countVowelsAndConsonants function takes a string as input and iterates through its characters. 
// It uses the vowels string to check if a character is a vowel. If it's a vowel, the vowelCount is incremented.
// If the character is an alphabetic character (using the regular expression /[a-zA-Z]/), but not a vowel,
// the consonantCount is incremented.