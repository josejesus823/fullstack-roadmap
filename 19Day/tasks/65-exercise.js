/*
65. Check if String Ends with 'Script'
Write a JavaScript program to test whether a string ends with "Script". 
The string length must be greater than or equal to 6.  
 */

function endsWithScript(string){
    return (string.length >= 6 && string.endsWith("Script")) ? true : false;
}

console.log(endsWithScript("JavaScript"));
console.log(endsWithScript("Java Script"));
console.log(endsWithScript("Java Scripts"));