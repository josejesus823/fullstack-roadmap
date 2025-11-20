// create a function that check if a string is a palindrome
function isPalindrome(str){
    const wordList = str.replaceAll(" ", "").toLowerCase().split("");
    const reverseWordList = [...wordList].reverse().toString();
    if (wordList.toString() == reverseWordList){
       return `Your word: ${str} is a palindrome`;
    }
       return `Your word: ${str} isn't a palindrome`;
}

console.log(isPalindrome("amor saa roma"));