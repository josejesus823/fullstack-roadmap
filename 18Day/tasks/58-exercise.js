/*
58. Four Copies of Last 3 Characters
Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. 
The string length must be 3 and above. 
*/
function copiesOfLast3Characters(string){
    let newStr = '';
    if (string.length < 3) return false;
    newStr = string.slice(string.length - 3);
    string = newStr.repeat(4);
    return string;


}
console.log(copiesOfLast3Characters("Python 3.0"));
console.log(copiesOfLast3Characters("JS"));
console.log(copiesOfLast3Characters("JavaScript"));
