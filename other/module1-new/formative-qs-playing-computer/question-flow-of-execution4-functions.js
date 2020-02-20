/*
Order of execution: predict the order of output of various 
logged messages through the flow of execution.
*/

function functionA() {
  return "A";
  functionB();
  console.log("A");
}
function functionB() {
  console.log("B");
}

functionA();

/* Choices:

A, B, A, B, A
A
A B
Nothing
*/

/*
What are we assessing?
* code reading
* following execution flow through nested function calls
* sequence of instructions still matters in functions  
* instructions in sequence are carried out in sequence
* understand the return keyword's effect on flow control.
* function is not run when it is declared
*/
