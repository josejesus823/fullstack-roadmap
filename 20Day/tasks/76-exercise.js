/*
76.Create Array with First/Last Elements from Array
Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. 
The length must be larger than or equal to 1.  
 */
const assert = require('assert');

function createArrayWithFAndL(array){
   return (array.length >= 1 ) ? [array[0], array[array.length -1]] : false;
    
}

assert.deepStrictEqual(createArrayWithFAndL([20, 20, 30]), [20,30], "Fallo porque no es igual");
assert.deepStrictEqual(createArrayWithFAndL([5, 2, 7, 8]), [5,8], "Fallo porque no es igual");
assert.deepStrictEqual(createArrayWithFAndL([17, 12, 34, 78]), [17, 78], "Fallo porque no es igual");


// console.log(createArrayWithFAndL([1,2,3,4]));