// How do you calculate the number of numerical digits in a string?

function countNumericalDigits(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            count++;
        }
    }
    return count;
}

const testString = "Hello123World456";
const digitCount = countNumericalDigits(testString);
console.log(`Number of numerical digits: ${digitCount}`);


//In this, countNumericalDigits function loops through each character in the input string.
// It uses isNaN() to check if the character is a valid number. If it is, the count is incremented. 