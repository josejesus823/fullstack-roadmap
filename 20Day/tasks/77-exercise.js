/*
77. Check if Array Contains 1 or 3
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  
 */

function containsNumber(array){
    return (array.indexOf(1) !== -1 || array.indexOf(3) !== -1);
}

console.log(containsNumber([0,3]));
console.log(containsNumber([1, 5]));  
console.log(containsNumber([2, 3]));  
console.log(containsNumber([7, 5])); 