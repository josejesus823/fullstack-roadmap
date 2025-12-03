/*
75. Create Array with Middle Elements from Two Arrays
Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.  
 */

function newArrayMiddleElements(arr1, arr2){
    let newArr = [arr1[1], arr2[1]];
    return newArr;
}
console.log(newArrayMiddleElements([1, 2, 3], [1, 5, 6]));  
console.log(newArrayMiddleElements([3, 3, 3], [2, 8, 0]));  
console.log(newArrayMiddleElements([4, 2, 7], [2, 4, 5])); 