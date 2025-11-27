/*
14. Get File Extension of Filename
Write a JavaScript exercise to get the filename extension.  
 */
function getFileExtension(file){
    const arrayString = file.split(".")
    console.log(`The extension of your file ${file} is ${arrayString[1]}`);
}

getFileExtension("python.php");