/*
22. Remove Character at Specified Position in String
Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
*/

function removeChar(string, position){
    let stringSpacesTrimmed = string.trim();
    if(position > stringSpacesTrimmed.length - 1 || position < 0){
        return "Sorry you are looking for a position that doesn't exist";
    }
    else {
        return stringSpacesTrimmed.substring(0, position) + stringSpacesTrimmed.substring(position + 1);

    }
}

console.log(removeChar("LeTic", 3));