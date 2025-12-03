/*
73. Reverse Elements of Array (Length 3)
Write a JavaScript program to reverse the elements of a given array of integers of length 3.  
 */

const assert = require('assert');

function reversedArray(arry){
    return arry.reverse();
}

assert.deepStrictEqual(reversedArray([5,4,3]), [3,4,5]);
assert.deepStrictEqual(reversedArray([1,0,-1]), [-1,0,1]);
assert.deepStrictEqual(reversedArray([2,3,1]), [1,3,2]);
// console.log(reversedArray([1,2,3]));