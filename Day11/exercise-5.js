/**
 * create a function that Capitalizes the first letter of each word in a given string.
 */
function capitalizeEachWord(str){
    if(str.length < 1){
        return "You need at leat 1 letter"
    }
    else {
        const listWord = str.toLowerCase().trim().split(" ");
        let upperCapitalizeWord = '';
        for (let char of listWord){
            const upperLetter = char[0].toUpperCase();
            let newWordWithLetterCapitalized = upperLetter + char.substring(1);
            upperCapitalizeWord += newWordWithLetterCapitalized + " ";
        }
        return upperCapitalizeWord.trim();
    }
}
console.log(capitalizeEachWord("hello jose how are w"));
