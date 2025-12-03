/*
83. Find Longest String in Array
Write a JavaScript program to find the longest string from a given array of strings.  
 */

function findLargestStr(array){
    let temporal = 0;
    let elementLongest = '';
    for(let i = 0; i < array.length; i++){
        if(array[i].length > temporal){
            temporal = array[i].length;
            elementLongest = array[i];
        }
    }
    return [elementLongest]
}

console.log(findLargestStr(['aaa', 'aa', 'aaa','aaaaa','aaaa',]))