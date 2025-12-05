/*
93. Find Max Difference Among All Pairs in Array
Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 
 */

function maxDifference(arr){
    const diffArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k !== i && k < arr.length; k++){
            diffArr.push(Math.abs(arr[i] - arr[k]));
        }
    }
    return Math.max.apply(null, diffArr);
}

console.log(maxDifference([1, 2, 3, 8, 9]));
console.log(maxDifference([1, 2, 3, 18, 9]));
console.log(maxDifference([13, 2, 3, 8, 9]));
