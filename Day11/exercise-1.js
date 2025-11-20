// create a function that given an string as a parameter returns how many vowels the string had.
const vowels = ['a','e','i','o','u'];
let count = 0;
function countVowels(str){
    lowerCaseWord = str.toLowerCase();
    for(let i = 0; i < lowerCaseWord.length; i++){
        if(vowels.includes(lowerCaseWord[i])){
            count++;
        }
    }
    return `Your word: ${str} has: ${count} vowels`;
}
console.log(countVowels("murcielago"));