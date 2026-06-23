# JavaScript Coding Interview Questions

A comprehensive collection of JavaScript coding interview questions and answers designed for Beginner, Mid-Level, and Experienced Developers.

## 📌 About

This repository contains carefully curated JavaScript interview questions covering core concepts, coding challenges, output-based questions, and real-world scenarios frequently asked in technical interviews.

Whether you are preparing for your first JavaScript interview or aiming for a Senior Frontend/Full Stack Developer role, this repository will help strengthen your JavaScript fundamentals and problem-solving skills.

## 🚀 Topics Covered

- Variables (`var`, `let`, `const`)
- Data Types
- Hoisting
- Scope & Closures
- Functions & Arrow Functions
- Callbacks
- Promises
- Async/Await
- Event Loop
- Execution Context
- Prototype & Inheritance
- Objects & Arrays
- ES6+ Features
- Destructuring
- Spread & Rest Operators
- Higher Order Functions
- Map, Filter, Reduce
- Currying
- Debouncing & Throttling
- DOM Manipulation
- Event Delegation
- Memory Management
- Design Patterns
- Coding Challenges
- Output-Based Questions
- Interview Scenarios

## 👨‍💻 Experience Levels

### Beginner
- JavaScript Fundamentals
- Variables and Functions
- Arrays and Objects
- Basic Coding Problems

### Intermediate
- Closures
- Callbacks
- Promises
- Async/Await
- Event Loop
- Array Methods

### Advanced
- Prototype Chain
- Event Delegation
- Currying
- Polyfills
- Design Patterns
- Performance Optimization

## 🎯 Who Can Use This Repository?

- Students
- Freshers
- Frontend Developers
- React Developers
- Full Stack Developers
- Software Engineers
- Technical Interview Preparation

## ⭐ Benefits

- 100+ Interview Questions
- Detailed Explanations
- Real Interview Scenarios
- Coding Challenges
- Output-Based Questions
- ES6+ Concepts
- Frequently Asked Interview Topics

## 🤝 Contributions

Contributions are welcome. Feel free to submit a pull request with additional questions, answers, or improvements.

## 1. Reverse a String

### Using Built-in Methods

```javascript
let str = "Hello";

let revStr = str.split("").reverse().join("");

console.log("Reverse String (Built-in method):", revStr);
```

### Without Built-in Methods

```javascript
let str = "Hello";
let strRev = "";

for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
}

console.log("Reverse String (Without Built-in method):", strRev);
```

---

## 2. Check if a String is a Palindrome

```javascript
let palindromeStr = "rajar";

let revString = palindromeStr.split("").reverse().join("");

if (palindromeStr === revString) {
    console.log(`${palindromeStr} is a Palindrome`);
} else {
    console.log(`${palindromeStr} is not a Palindrome`);
}
```

---

## 3. Factorial of a Number

```javascript
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log(`Factorial of ${num}:`, fact);
```

---

## 4. Find Largest and Smallest Number in an Array

```javascript
let arr = [2, 4, 6, 1, 3, 8, 0];

let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }

    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Smallest Number:", smallest);
console.log("Largest Number:", largest);
```

---

## 5. Remove Duplicates from an Array

```javascript
let arr1 = [2, 3, 4, 2, 6, 3, 1, 4];
let uniqueArr = [];

for (let i = 0; i < arr1.length; i++) {
    if (!uniqueArr.includes(arr1[i])) {
        uniqueArr.push(arr1[i]);
    }
}

console.log("Unique Array:", uniqueArr);
```

---

## 6. Check if a Number is Prime

```javascript
function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("7 is a Prime Number:", isPrime(7));
```

---

## 7. Sum of All Elements in an Array

```javascript
let arr2 = [2, 3, 4, 1, 6, 3];
let sum = 0;

for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}

console.log("Sum of Elements in Array:", sum);
```

---

## 8. Swap Two Variables Without Using a Third Variable

```javascript
let a = 5;
let b = 4;

a = a + b;
b = a - b;
a = a - b;

console.log("Value of a after swapping:", a);
console.log("Value of b after swapping:", b);
```

---

## 9. Find Missing Number in an Array (1 to N)

```javascript
function missingNum(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

console.log(
    "Missing Number:",
    missingNum([1, 2, 3, 5], 5)
);
```

---

## 10. Count Vowels in a String

```javascript
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log("Vowel Count:", countVowels("Hello World"));
```



## 📧 Connect With Me

- GitHub: https://github.com/ShubhamJoshi1998
- LinkedIn: https://www.linkedin.com/in/shubham-joshi-827b66165/

---

⭐ If you find this repository helpful, please consider giving it a star.
