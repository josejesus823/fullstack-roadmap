/*
61. Concatenate Two Strings Without First Character
Write a JavaScript program to concatenate two strings except for their first character.  
 */

function concatTwoStrings(string1, string2){
    if(string1.length < 2 || string2.length < 2) return `Both strings must have a length of 2`
    const string1WithoutFirstLetter = string1.substring(1);
    const string2WithoutFirstLetter = string2.substring(1);
    return string1WithoutFirstLetter + string2WithoutFirstLetter;
}

console.log(concatTwoStrings("PHP", "S"));