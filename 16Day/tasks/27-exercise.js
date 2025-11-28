/*
26. Add Last 3 Characters to Front and Back of String
Write a JavaScript program to create a string from a given string. 
This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more. 
 */
function startsWithJava(string){
    if(string.toLowerCase().startsWith("java")){
        return true;
    }
    else{
        return false;
    }

}
console.log(startsWithJava(""));