/*
70. Rotate Elements Left in Array (Length 3)
Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
 */

const assert = require('assert');

function rotateArray(array){
    const firstElement = array[0];
    for (let i = 0; i < array.length - 1; i++){
        array[i] = array[i + 1];
    }
    array[array.length -1 ] = firstElement;
    return array;

}
//TDD : Test Driven Development
assert.deepStrictEqual(rotateArray([1,2,3]), [2,3,1], "Fallo porque no es igual");
// function rotateArray(array){
//     const copyArr = [...array]; // [1,2,3];
//     for(let i = 0; i < array.length; i++){
//         if(i === 0) array[array.length - 1] = copyArr[i];
//         else{
//             array[i - 1] = copyArr[i];
//         } 
//         // 
//     }
//     // return array;
//     return array;
// }

console.log(rotateArray([1,2,3]));
console.log(rotateArray([3, 4, 5]));
console.log(rotateArray([0, -1, 2]));
console.log(rotateArray([7, 6, 5])); 