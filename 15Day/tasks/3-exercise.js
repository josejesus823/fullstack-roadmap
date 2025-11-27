/* 3. Get Current Date in Various Formats
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

function dateVariousFormats() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(`${month}-${day}-${year}`);
  console.log(`${month}/${day}/${year}`);
  console.log(`${day}-${month}-${year}`);
  console.log(`${day}/${month}/${year}`);
}

dateVariousFormats();
