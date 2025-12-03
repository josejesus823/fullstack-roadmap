/*
80. Swap First and Last Elements in Array
Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.  
 */
function swapElements(array){
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    array[0] = lastElement;
    array[array.length -1] = firstElement;
    return array;
}


// console.log(swapElements([10,30,40]));
console.log(swapElements([1, 2, 3, 4]));
console.log(swapElements([0, 2, 1]));
console.log(swapElements([3]));