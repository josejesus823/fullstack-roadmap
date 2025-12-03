/*
71. Check if 1 is First/Last Element in Array
Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. 
The array length must be larger than or equal to 1.  
 */

const assert = require('assert');


function checkFirstAndLastElements(array){
    return (array[0] === array[array.length - 1]);
}

assert.strictEqual(checkFirstAndLastElements([10,20,30]), false);
assert.strictEqual(checkFirstAndLastElements([10,20,30, 10]), true);
assert.strictEqual(checkFirstAndLastElements([20,20,20]), true);



// console.log(checkFirstAndLastElements([10, 20, 30])); //false
// console.log(checkFirstAndLastElements([10, 20, 30, 10])); //true
// console.log(checkFirstAndLastElements([20, 20, 20])); //true
