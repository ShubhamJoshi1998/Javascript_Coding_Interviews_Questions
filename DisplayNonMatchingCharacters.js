// How do you find the non-matching characters in a string?

function findNonMatchingCharacters(str, referenceStr) {
    const nonMatchingChars = [];

    for (let i = 0; i < str.length; i++) {
        if (!referenceStr.includes(str[i])) {
            nonMatchingChars.push(str[i]);
        }
    }

    return nonMatchingChars;
}

const inputString = "hello";
const referenceString = "world";
const nonMatching = findNonMatchingCharacters(inputString, referenceString);

console.log("Non-matching characters:", nonMatching); // Output: Non-matching characters: ["h", "e", "l"]


// In this, findNonMatchingCharacters function takes two parameters: the input string(str) and
// the reference string(referenceStr) against which you want to compare. 
// It loops through each character in the input string and checks if it is not present in the reference string.
// If the character is not found in the reference string, it is added to the nonMatchingChars array.
// Finally, the function returns an array containing all non - matching characters.