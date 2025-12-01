/*
60. Remove First and Last Characters in String
Write a JavaScript program to create a new string without the first and last characters of a given string.  
*/
function removeFirstAndLastCharacter(string){
    return(string.substring(1, string.length - 1));
}
console.log(removeFirstAndLastCharacter("JavaScript"));
console.log(removeFirstAndLastCharacter("JS"));
console.log(removeFirstAndLastCharacter("PHP"));