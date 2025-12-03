/*
66. Return City Name if Starts with 'Los' or 'New'
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.  
 */

function cityName(string){
    return (string.startsWith("Los") || string.startsWith("New")) ? string : "";
}

console.log(cityName("New York"));
console.log(cityName("Los Angeles"));
console.log(cityName("London")); 