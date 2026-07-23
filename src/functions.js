// TASKS 1 & 2: WHAT IS A FUNCTION AND ITS PURPOSE?

/* 
    A function is a reusable block of code that groups together a sequence of statements.
    Think of it like a recipe: you write it once, and you can cook it whenever you want.
    Purpose: Code reuse, cleaner organization, and processing different data using arguments.

*/

// TASK 3: SYNTAX FOR CREATING A FUNCTION

/* 
    Syntax for creating a function:
        1. function keyword -> tells the browser we are creating a function
        2. Function name -> camelCase name used to call it later
        3. Parameters -> placeholder variables inside parentheses () that receive input data
        4. Code block -> code enclosed in curly braces {} that runs when executed
*/
let userName = prompt("Enter your name");
console.log(userName);



// CREATE YOUR FUNCTION HERE
function greetUser(){
    console.log("Oobake user");
    alert(`Oobake ${userName}`);
}


// TASK 4: CALLING A FUNCTION
/* 
    Writing a function does not make it run. To execute it, you must "call" or "invoke" it.
    To call it: type the function name followed by parentheses containing the real "arguments".
*/

// CALL YOUR FUNCTION HERE
greetUser();

// TASK 5: AGE VERIFICATION SYSTEM FUNCTION
// This function takes an age parameter and runs dynamic conditional logic inside it.


// Testing our Task 5 function with different inputs:


// Calling the function and passing the user's real prompt inputs as arguments

