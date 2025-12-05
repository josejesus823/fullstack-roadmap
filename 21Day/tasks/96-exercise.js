/*
Sum of Absolute Differences of Consecutive Numbers
Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.
 */


function sumAbsDifference(arr){
    const sumArr = [];
    for(let i = 0; i < arr.length -1; i++){
        sumArr.push(Math.abs(arr[i] - arr[i+1]));
    }

    return sumArr.reduce((acum, num) => {
        return acum + num;
    })
}

console.log(sumAbsDifference([1,2,3,2,-5]));

