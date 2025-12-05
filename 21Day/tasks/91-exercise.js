/*
91. Find Max Sum of k Consecutive Numbers in Array
Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 
 */

function maxSumK(arr, k){
    const arrySum = []
    for(let i = 0; i < arr.length - 1; i++){
        const sumNumbers = arr.slice(i, i + k).reduce((acum, num) => acum + num, 0);
        arrySum.push(sumNumbers)
    }

    return Math.max.apply(null, arrySum);

}
console.log(maxSumK([1, 2, 3, 14, 5], 2));
console.log(maxSumK([2, 3, 5, 1, 6], 3));
console.log(maxSumK([9, 3, 5, 1, 7], 2));