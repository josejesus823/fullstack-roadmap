/*
50. Capitalize First Letter of Each Word in String
Write a JavaScript program to capitalize the first letter of each word in a given string.  
 */

function capitalizeFirstLetter(string){
    const arrayWords = string.split(" ");
    for(let i = 0; i < arrayWords.length; i++){
        arrayWords[i] = arrayWords[i][0].toUpperCase() + arrayWords[i].substring(1);
    }
    return arrayWords.join(" ");
}

console.log(capitalizeFirstLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));