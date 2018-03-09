var exercises = require("./module1");

describe("Answers", function() {
  beforeEach(function() {});

  it("Q1 - Check if a string is Code Your Future", function() {
    const cyf = "Code Your Future";
    let solution = exercises.question1(cyf);
    expect(solution).toEqual(true);
    solution = exercises.question1("Something else");
    expect(solution).toEqual(false);
  });

  it("Q2 - IF/ELSE: Check if two numbers are the same", function() {
    let number1 = 1;
    let number2 = 2;
    solution = exercises.question2(number1, number2);
    expect(solution).toEqual(false);

    number1 = 5;
    number2 = 5;
    solution = exercises.question2(number1, number2);
    expect(solution).toEqual(true);
  });

  it("Q3 - Is the number odd or even?", function() {
    solution = exercises.question3(3);
    expect(solution).toEqual("odd");
    solution = exercises.question3(14);
    expect(solution).toEqual("even");
  });
});
