/*
64. Concatenate Strings with Matching Length
Write a JavaScript program to concatenate two strings and return the result. 
If the length of the strings does not match, then remove the characters from the longer string.  
*/
function concatString(string1, string2){
    if(string1.length !== string2.length){
        return (string1.length > string2.length) 
        ? string1.substring(string1.length - string2.length) + string2 
        : string1 + string2.substring(string1.length)
    }

}
console.log(concatString("Python", "JS"));  //onJS
console.log(concatString("ab", "cdef")); //abef
// console.log(concatString("abcd", "cdef"));