/*
81. Add Two Digits in a Two-Digit Number
Write a JavaScript program to add two digits to a given positive integer of length two.  
 */

function addTwoDigit(number){
    const numberString = String(number);
    const firstDigit = Number(numberString[0]);
    const secondDigit = Number(numberString[1]);

    return firstDigit + secondDigit;
}


console.log(addTwoDigit(25));
console.log(addTwoDigit(50));