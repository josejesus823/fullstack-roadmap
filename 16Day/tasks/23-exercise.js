/*
23. Swap First and Last Characters in String
Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
The string length must be broader than or equal to 1.  
*/

function changinStringPosition(string){
    const removeStringSpaces = string.trim();

    if(removeStringSpaces.length < 1 ){
        return "String must be > 0"
    } 
    else if(removeStringSpaces.length === 1) {
        return removeStringSpaces;   
    }
    else {
        let newString = '';
        const firstLetter = removeStringSpaces[0];
        const lastLetter = removeStringSpaces[removeStringSpaces.length - 1];
        newString += removeStringSpaces.substring(1, removeStringSpaces.length - 1);
        return lastLetter + newString + firstLetter
    }
}

console.log(changinStringPosition("san"));