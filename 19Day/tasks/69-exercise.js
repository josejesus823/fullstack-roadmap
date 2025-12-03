/*
69. Sum of 3 Elements in Array (Length 3)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  
 */

function sumElements(array){
    let suma = array.reduce((acu, num) => {
           return acu + num;
    }, 0);
    return suma;
}

// function sumElements(array){
//     let acu = 0;
//     for(let i = 0; i < array.length; i++){
//         acu += array[i];
//     }
//     return acu;
// }

console.log(sumElements([10, 32, 20]));  
console.log(sumElements([5, 7, 9])); 
console.log(sumElements([0, 8, -11]));
