/*
57. Create String of Specified Copies
Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. 
 */

function createCopies(string, numOfCopies){
    return (numOfCopies < 0) ? 'No negative numbers' : string.repeat(numOfCopies);
}

console.log(createCopies("abc", 5));
console.log(createCopies('abc', 0));
console.log(createCopies("abc", -2))
