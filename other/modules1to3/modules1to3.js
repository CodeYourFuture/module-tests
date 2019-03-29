/* Welcome to the JS quiz!
 *
 * This is to help mentors know what we need to do better. 
 *
 * You are welcome to use MDN to check syntax: https://developer.mozilla.org
 */

/* Question 1
 *
 * Write a function that takes two numbers and returns the the largest number of the two.
 */
function question1(num1, num2) {
    // TODO
  }
  
  /* Question 2
   *
   * Write a function that takes an array and returns the last 3 elements in the array.
   */
  function question2(array1) {
    // TODO
  }
  
  /* Question 3
   *
   * Write a function which takes two arguments, with the second argument having a
   * default value of false.
   * 
   * The function should return true if BOTH the first argument AND the second argument are
   * true, otherwise, it should return false.
   * 
   * You will also have to edit the parameter list for this function.
   */
  function question3(/*TODO*/) {
  
  }
  
  /* Question 4
   *
   * Write a function which takes a string and returns the string reversed.
   */
  function question4(string1) {
    // TODO
  }
  
  /* Question 5
   *
   * Write a function which takes an array of strings and returns the ones
   * starting with the letter 'M' or 'm'
   */
  function question5(strings) {
    // TODO
  }
  
  /* Question 6
   *
   * Write a function which takes an array of objects, containing countries and their capitals,
   * and return the capitals of countries whose *country name* starts with letter 'M' or 'm'
   * Example input:
   * [{country: "Spain", capital: "Madrid"}, {country: "Madagascar", capital: "Antananarivo"}]
   * Example output:
   * ["Antananarivo"]
   */
  function question6(countries) {
    // TODO
  }
  
  /* Question 7
   *
   * Write a function which takes an array of Users and add an email address
   * containing their first name and '@codeyourfuture.io'
   * Example input:
   * [{firstName: 'Ada', lastName: 'Lovelace'}]
   * Example output:
   * [{firstName: 'Ada', lastName: 'Lovelace', email: 'ada@codeyourfuture.io'}]
   */
  function question7(users) {
    // TODO
  }
  
  /* Question 8
   *
   * Write a class named Rectangle.
   *
   * The class should have
   * - an attribute called colour
   * - an attribute called height (with a default value of 10)
   * - an attribute called width (with a default value of 10)
   * - a constructor which takes those parameters
   * - a method called area, which returns the height multiplied by width
   */
  class Rectangle {
    // TODO
  }
  
  function question8() {
    //Edit the class Rectangle above.
    //do NOT edit this function.
    return new Rectangle('red', 4);
  }
  
  /* Question 9
   *
   * Write a function which takes an array of Rectangles as defined in Question 8.
   * Return the sum of the areas of all Rectangles
   */
  function question9() {
    // TODO
  }
  
  //Do not edit this.
  module.exports = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9
  }