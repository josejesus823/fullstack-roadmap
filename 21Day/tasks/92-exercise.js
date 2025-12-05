/*
92. Find Max Difference Between Adjacent Elements
Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 
 */

function findMaxDifference(arr){
    const diffArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        diffArr.push(Math.abs(arr[i] - arr[i + 1]));
    }

    return Math.max.apply(null, diffArr);
}

// console.log(findMaxDifference([1,2,3,8,9]));
console.log(findMaxDifference([1, 2, 3, 8, 9]))
console.log(findMaxDifference([1, 2, 3, 18, 9]))
console.log(findMaxDifference([13, 2, 3, 8, 9]))