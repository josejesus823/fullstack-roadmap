/*
74. Set All Elements to Largest of First/Last in Array
Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. 
Display the updated array.  
 */

function largestNumber(array){
    let maxNumber = Math.max.apply(null, array);
    for(let i = 0; i < array.length; i++){
        array[i] = maxNumber
    }
    return array;
}

console.log(largestNumber([20,30,40]));
console.log(largestNumber([-7, -9, 0]));    // Output: [0, 0, 0]
console.log(largestNumber([12, 10, 3])); 