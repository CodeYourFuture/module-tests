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

  it("Q4 - Returns an array containing only every second number from [0 ... 100]", function() {
    const arr = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
                  20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
                  40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
                  60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
                  80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100
                ];
    solution = exercises.question4();
    expect(solution).toEqual(arr);
  });

  it("Q5 - Multiply two numbers", function() {
    let number1 = 6;
    let number2 = 23;
    solution = exercises.question5(number1, number2);
    expect(solution).toEqual(138);

    number1 = -5;
    number2 = 5;
    solution = exercises.question5(number1, number2);
    expect(solution).toEqual(-25);

    number1 = 0.7;
    number2 = 2.3;
    solution = exercises.question5(number1, number2);
    expect(solution).toEqual(1.61);
  });

  it("Q6 - Animals array", function() {
    const animals = ['lions', 'tigers', 'bears']
    solution = exercises.question6(animals);
    expect(solution).toEqual('The array contains 3 animals. These are: lions and tigers and bears.');
  });

  it("Q7 - Person object", function() {
    const person = {
      firstName: 'Sara',
      lastName: 'Marshall',
      age: 25,
      occupation: 'dentist',
      location: 'Warrington'
    }
    solution = exercises.question7(person);
    expect(solution).toEqual('Hi, my name is Sara Marshall. I am 25 years old and work as a dentist in Warrington.');
  });

  it("Q8 - Array concatenation", function() {
    const array1 = ["lions", "tigers", "bears"];
    const array2 = ["penguins", "flamingoes", "eagles"];
    const extra  = "cobras";
    solution = exercises.question8(array1, array2, extra);
    expect(solution).toEqual([
      "lions",
      "tigers",
      "bears",
      "penguins",
      "flamingoes",
      "eagles",
      "cobras"
    ]);
  });

  it("Q9 - Tax addition part1", function() {
    // tax is 20% of the retail price
    const taxAmount = 0.2;
    const retailPrice = "£10"; 
   

    solution = exercises.question9(retailPrice, taxAmount);
    expect(solution).toEqual("£12")
  })

  it("Q10 - Tax addition part2", function() {
    const tax = 0.2;
    const retailPrice = "£15"
    solution = exercises.question10(retailPrice);
    expect(solution).toEqual("£18")
  })
});
