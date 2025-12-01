/*
49. Replace Each Character with Next Alphabet Letter
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  
 */
function replaceCharacters(word){
    let newWord = "";
    const vowels = ['a','e','i','o','u']
    for(let i = 0; i < word.length; i++){
        const nextCharacter = String.fromCharCode(word.charCodeAt(i) + 1);
        if(vowels.includes(nextCharacter)) {
            const upperVowelCharacter = nextCharacter.toUpperCase();
            newWord += upperVowelCharacter
        }
        else{
            newWord += nextCharacter;
        }

    }
    console.log(newWord);

}

replaceCharacters("PYTHON");
replaceCharacters("WER");
replaceCharacters("php")