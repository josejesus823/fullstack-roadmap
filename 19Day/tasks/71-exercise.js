/* 
71. Check if 1 is First/Last Element in Array
Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. 
The array length must be larger than or equal to 1.  
*/
const assert = require('assert');

function firstLastElements(array){
    return (array[0] === 1 || array[array.length - 1] === 1);
}

assert.strictEqual(firstLastElements([1,3,5,1]), true);
assert.strictEqual(firstLastElements([1,3,5]), true);
assert.strictEqual(firstLastElements([2,4,6]), false);

assert.strictEqual(firstLastElements([2, 3, 4]), false);
assert.strictEqual(firstLastElements([7, 1, 2]), false);
assert.strictEqual(firstLastElements([]), false); 



console.log(firstLastElements([1, 3, 5]));
console.log(firstLastElements([1, 3, 5, 1]));
console.log(firstLastElements([2, 4, 6]));