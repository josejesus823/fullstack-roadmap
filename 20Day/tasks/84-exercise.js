/*
84. Replace Characters with Next in Alphabet

Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
 */

function replaceChar(string){
    let newString = ''
    for(let i = 0; i < string.length; i++){
        const nextCharacter = String.fromCharCode(string.charCodeAt(i) + 1);
         if(string.charCodeAt(i) === 122){
            newString += 'a';
         }
         else{
             newString += nextCharacter;
         }
    }
    return newString;
}


console.log(replaceChar("abcdxyz"));