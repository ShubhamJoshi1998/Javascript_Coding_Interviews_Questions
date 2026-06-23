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

## 1. Reverse a string with and without a method

let str = "Hello"
let revStr = str.split("").reverse().join("");
console.log("Reverse String(built-In method) : ", revStr)

let strRev = "";
for(let i=str.length-1; i>=0; i--){
    strRev +=str[i]
}
console.log("Reverse String(without built-In method) : ", strRev)

## 2. Check If the string is a Palindrome

let palindromeStr = "rajar"
let revString = palindromeStr.split("").reverse().join("");
if (palindromeStr === revString ){
    console.log(palindromeStr , "is a Palindrome")
}else{
    console.log(palindromeStr,"is not a Palindrome")
}

## 3. Check Factorial of a number
let num = 5;
fact = 1;

for (let i=1; i<=num; i++){
    fact *= i
}
console.log("Factorial of", num, ":" ,fact)

## 4. FInd largest and smallest number in an array

let arr = [2,4,6,1,3,8,0];
let smallest = arr[0];
let largest = arr[0];

for (let i=0; i<=arr.length; i++){
    if(arr[i]<smallest){
        smallest=arr[i]
    }else if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log("Smallest number :",smallest, "largest number :", largest);

## 5. Remove duplicates from an array

let arr1 = [2,3,4,2,6,3,1,4];
let uniqueArr = [];

for (let i= 0; i<arr1.length; i++){
    if(!uniqueArr.includes(arr1[i])){
        uniqueArr.push(arr[i])
    }
}
console.log("unique Array : ", uniqueArr)

## 6. Check if a number is prime 

function isPrime(num){
    if(num<=1) return false;
    
    for(let i=2; i<num; i++){
        if(num%i === 0){
            return false
        }
    }
    return true
}

console.log("7 is a prime number: ",isPrime(7))

## 7. Sum of all elements in the array

let arr2 = [2,3,4,1,6,3]
let sum=0

for(let i=0; i<arr2.length; i++){
    sum +=arr2[i]
}
console.log("Sum of elements in the array :", sum)

## 8. Swap two variables without using third variable

let a = 5;
let b = 4;
 a = a+b;
 b = a-b;
 a = a-b;

console.log("before a is 5 after swapping :", a)
console.log("before b is 4 after swapping :", b)

## 9. Find missing number in an array(1 to N)

function missingNum(arr,n){
    let expectedSum = (n*(n+1))/2
    let actualSum = 0;
    
    for(let i =0; i<arr.length; i++){
        actualSum +=arr[i]
    }
    return expectedSum-actualSum;
}
console.log("missingNum in array =[1,2,3,5] :", missingNum([1,2,3,5], 5))

## 10. Count vowels in a string

function countVowels(str){
    let count = 0;
    let vowels = 'aeiouAEIOU';
    
    for (let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;
}

console.log("vowels count :", countVowels("Hello World"))


## 📧 Connect With Me

- GitHub: https://github.com/ShubhamJoshi1998
- LinkedIn: https://www.linkedin.com/in/shubham-joshi-827b66165/

---

⭐ If you find this repository helpful, please consider giving it a star.
