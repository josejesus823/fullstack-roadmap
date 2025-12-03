/*
78. Check if Array Does Not Contain 1 or 3
Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  
 */

function checkIfDoenstHaveNumber(array){
    return (array.indexOf(1) !== -1 || array.indexOf(3) !== -1) ? false : true;
}

console.log(checkIfDoenstHaveNumber([7,8]));
console.log(checkIfDoenstHaveNumber([3, 2]));
console.log(checkIfDoenstHaveNumber([0, 1]))