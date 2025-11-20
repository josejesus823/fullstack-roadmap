/**
 *  create a function that receives an string and a letter as parameters
 *  removes all the letter occurrences from the string and return it
 */
function ocurrensLetter(str, letter){
    const lowerCaseWord = str.toLowerCase();
    let newWord = "";
    for(const char of lowerCaseWord){
        if(char != letter.toLowerCase()){
            newWord += char;
        }
    }
    return newWord;
}
console.log(ocurrensLetter("who we are in the world", "o"));


