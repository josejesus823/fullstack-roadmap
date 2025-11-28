/*
30. Remove 'Script' from String at 5th Position
Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. 
If "Script" appears in the string, return the string without "Script" otherwise return the original one.  
*/

function checkScriptWord(string){
    const wordToRemove = "script"
    if(string.substring(4, 4 + wordToRemove.length) === 'Script'){
   
        return string.replace("Script", "");;
    }
    else{
        return string;
    }
}
console.log(checkScriptWord("CoffeeScript"));
console.log(checkScriptWord("JavaScriptEsLoMaximo"));
