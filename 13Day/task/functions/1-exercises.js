// Write a function that prints hello, if a name is send to the function as parameter it should print "hello <name>"


// ******************* DONT MODIFY - START ******************* 
function sayHello(parameter){
    if(!Boolean(parameter)){
        console.log("Hello")
    }
    else{
        console.log("Hello", parameter)
    }
}
sayHello(); // should print "hello"
sayHello("little stars"); // should print "hello little stars"
// ******************* DONT MODIFY - END ******************* 
