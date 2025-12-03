

function arraysEquals(array1, array2){
    let count = 0;

    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i] || array2[i] !== array1[i]){
            count++;
        }
    }
    // console.log(count);
    return count === 2 || count === 0;
}

console.log(arraysEquals([10, 20, 30], [10, 20, 30]));   // true
console.log(arraysEquals([10, 20, 30], [30, 10, 20]));   // true
console.log(arraysEquals([10, 20, 30, 40], [10, 30, 20, 40]))