/*
54. Count Vowels in String
Write a JavaScript program to count the number of vowels in a given string.
 */

function countVowels(word){
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for(let i = 0; i < word.length; i++){
        if (vowels.includes(word[i].toLowerCase())){
            count++
        }
    }
    return count;
}

console.log(countVowels("Python"));
console.log(countVowels("w3resource.com"));