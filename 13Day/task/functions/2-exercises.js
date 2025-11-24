/**
 *  write a js function that sums 2 numbers
 */


// ******************* DONT MODIFY - START ******************* 
function sumNumbers(num1, num2){
    if(num1 && !num2){
        console.log("you should provide two numbers");
    } else {
        console.log(num1 + num2);
    }
}
sumNumbers(1, 3); // should print "the sum is: 4"
sumNumbers(0, 3); // should print "the sum is: 3"
sumNumbers(0, 0); // should print "the sum is: 0"
sumNumbers(100, 1000); // should print "the sum is: 1100"
sumNumbers(2); // should print "you should provide two numbers"
// ******************* DONT MODIFY - END ******************* 