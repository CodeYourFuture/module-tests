//order of execution: predict the order of output of various logged messages through the flow of execution.

function sayHello() {
  console.log("Hello");
}

console.log("A");
if (2 > 3) {
  console.log("B");
} else {
  console.log("C");
}
console.log("D");

sayHello();

/*
Choices: 
give them free-text input, rather than MCQ here.

    * Hello, A, C, D
    * Hello, A, B, C, D
    * A, B, C, D, Hello
    * A, C, D, Hello

    What are we assessing?
    * instructions in sequence are carried out in sequence
    * function is not run when it is declared
    * flow of execution through an if-else
    * flow of execution AFTER an if-else
    * 
    */
