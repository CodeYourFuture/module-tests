/**
  +++++++++++++++++++++++++++++++++++++++++++
  Welcome to the JavaScript test!
  Please answer the following questions by filling in the parts marked with TODO:

  The goal is to make all the tests pass!
*/

/**
  Question 1
  Write a function that compares an input string with "Code Your Future".
  
  Return true if they are the same or false otherwise.
*/

function question1(name1) {
  return name1 === "Code Your Future";
}

/**
  Question 2:
  Write a function that compares two input integers.

  Return true if they are equal, or false otherwise.
*/

const question2 = (number1, number2) => number1 === number2;

/**
  Question 3:
  Write a function that checks if an input integer is an even or an odd number.

  Return a string "odd" if the number is odd, or a string "even" if the number is even.
*/

function question3(number) {
  // TODO:

  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

/**
  Question 4:
  Write a function that takes an array of integers as input, and returns an array containing only every second element.

  Use any array iteration methods known to you.
  
  For example, if the input array is: [1,2,3,4,5,6]
  the output would be: [2,4,6]
*/

function question4(array) {
  // TODO:
  var newArray = [];
  for (i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  return newArray;
}

/**
  Question 5:
  Write a function that multiplies two input numbers (positive or negative).

  Return the result of the multiplication.
*/

function question5(number1, number2) {
  // TODO:
  return number1 * number2;
}

/**
  Question 6:
  Write a function that takes an array as input.

  The output should be a string, which contains:
  - the number of elements in the array
  - a list of all elements in the array

  The output string should be in the following format:
  "The array contains {number of elements} animals. These are: {element1},{element2},{element3},{element4}."
*/

function question6(array) {
  // TODO:
  var numberElements = array.length;
  var listAnimals = array.join(",");
  return `The array contains ${numberElements} animals. These are: ${listAnimals}.`;
}

/**
  Question 7:
  Write a function that concatenates two arrays, then adds an additional item to the resulting array.
  The inputs are:
  -  two arrays
  -  a string (as the additional item). 
  The two input arrays must not be modified.

  The output is one array.
*/

function question7(array1, array2, extraElement) {
  // TODO:
  var twoArrays = [...array1, ...array2];
  twoArrays.push(extraElement);
  return twoArrays;
}

/**
  Question 8:
  Write a function that calculates a price with added tax.

  The inputs are:
   - a string containing the currency and an integer, float, either negative or positive. For example "£34.59"
   - an integer or float representing the tax amount

  The output should be a string, that represents the calculated price with the currency symbol.
*/

function question8(retailPrice, taxAmount) {
  // TODO:
  var taxTotal = retailPrice * taxAmount;
  var result = retailPrice.split();
  //Not sure how to remove the currency symbol, tried to split the string and extract the currency symbol, store it in
  //another variable, sum the price and the taxamount and later with join trying to add the currency symbol.
}

module.exports = {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8
};
