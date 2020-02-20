/*
Order of execution: predict the order of output of various 
logged messages through the flow of execution.

Advanced.

*/

function functionOne() {
  functionTwo();
  console.log("A");
}
function functionTwo() {
  console.log("B");
}

console.log("C");

functionOne();
functionTwo();

console.log("D");

/* Choices:

A, B, C, A, B, D;
C, B, A, B, D;
A, B, C, D;
B, A, C, A, B, D;
*/

/*
What are we assessing?
* code reading
* following execution flow through a function
* sequence of instructions still matters in functions  
* instructions in sequence are carried out in sequence
* function is not run when it is declared
* (Note:This is intentionally abstract, so they can't be guided by the application context.)
*/
