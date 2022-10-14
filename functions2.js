/* 
    Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
    Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
    Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    De fine a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
    Write a function that returns the number of arguments passed to the function when called.
    Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
    Write a function findLongestWord that takes an array of words and returns the length of the longest one.
    Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
Bonus

Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

Write a function that takes a string as argument and returns an object where:
the keys are the characters that occur in the string
the values are the number of occurrences for each letter, regardless of the case
*/

// 1.
const maxOfTwoNumbers = (a, b) => {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return a; //This case would mean the numbers are equal, so I will still return the largest number;
    }
}

// 2.
const maxOfThreeNumbers = (a, b, c) => {
    let arr = [a, b, c];
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

// 3.
const isCharacterAVowel = (character) => {
    let match = /[aeiou]/i;
    let testCase = character.match(match);
    return testCase !== null ? true : false;
}

// 4.
const sumArray = (array) => {
    let result = 0;
    array.forEach(number => result += number);
    return result;
}

const multiplyArray = (array) => {
    let result = 1;
    array.forEach(number => result *= number);
    return result;
}

// 5.
const argLength = (...args) => args.length;


// 6.
const reverseString = (string) => string.split('').reverse().join('');

// 7.
const findLongestWord = (string) => {
    let stringArray = string.split(' ');
    stringArray.sort((a, b) => a.length - b.length);
    return stringArray[stringArray.length - 1];
}

// 8. 
const filterLongWords = (string, minLength) => {
    let stringArray = string.split(' ');
    let result = stringArray.filter(word => word.length > minLength);
    return result;
}

//Bonus 1.
String.prototype.reverseString = function () {
    return this.valueOf().split('').reverse().join('');
}
console.log("Per Scholas".reverseString());

//Bonus 2.


const stringToObj = (string) => {
    let charArray = []
    let lengthArray = [];
    let stringArray = string.split('');
    let result = {};

    for (let i = 0; i < stringArray.length; i++) {
        if (!charArray.includes(stringArray[i])) {
            charArray.push(stringArray[i]);
            let regex = new RegExp(stringArray[i], `ig`);
            let testCase = string.match(regex);
            lengthArray.push(testCase.length);
        }

        for (let i = 0; i < charArray.length; i++) {
            result[charArray[i]] = lengthArray[i];
        }
    }
    return result;
}
console.log(stringToObj('PerScholas'));

