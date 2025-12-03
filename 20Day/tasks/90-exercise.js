/*
90. Find kth Greatest Element in Array
Write a JavaScript program to find the kth greatest element in a given array of integers.  
 */

function findKthGreatest(array, k){
    const arraySorted = array.sort();
    const arrayReverse = arraySorted.reverse();
    console.log(arraySorted[array.length - k]);
    console.log(arrayReverse.reverse());
}

findKthGreatest([1,2,6,4,5], 3);
findKthGreatest([-10,-25,-47,-36,0], 1);