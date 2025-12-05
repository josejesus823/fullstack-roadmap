/*
95. Replace Numbers with Specified Value in Array
Write a JavaScript program to replace all numbers with a specified number in an array of integers. 
 */

function replaceNumber(arr, oldV, newV){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === oldV){
            arr[i] = newV
        }
    }

    return arr;
}

console.log(replaceNumber([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));