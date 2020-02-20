/*
Order of execution: predict the order of output of various 
logged messages through the flow of execution.
*/

console.log("A");

let colours = ["green", "blue", "orange"];

colours.forEach(element => {
  console.log("B");
  console.log(element);
});
console.log("C");

/*
What are we assessing?
* code reading
* repeating flow of execution through an array.forEach
* sequence of instructions still matters in functions  
* instructions in sequence are carried out in sequence
* function is not run when it is declared
*/
