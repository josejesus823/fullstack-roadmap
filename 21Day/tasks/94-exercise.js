/*
94. Find Most Frequent Number in Array
Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
 */

function mostFrequentNumber(arr) {
    const frequentNumbers = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in frequentNumbers)) {
            frequentNumbers[arr[i]] = 1;
        }
        else {
            frequentNumbers[arr[i]]++;
        }
    }

    const [maxKey, maxValue] = Object.entries(frequentNumbers).reduce((a, b) => (a[1] > b[1] ? a : b));
    return maxKey;
}


console.log(mostFrequentNumber([1, 2, 3, 2, 2, 8, 1, 9]));