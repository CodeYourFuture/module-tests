/**
  +++++++++++++++++++++++++++++++++++++++++++
  Welcome to the JavaScript test (module 2)!
  Please answer the following questions by filling in the parts marked with TODO:

  The goal is to make all the tests pass!

  Please UNCOMMENT each function, and its associated name in the module.exports
  object at the bottom of the file, as you reach them.
*/

/**
  Question 1:
  Write a function that receives a 'person' object as a parameter. This object
  contains the information about the person as 5 key/value pairs (`firstName`,
  `lastName`, `age`, `occupation` and `location`).

  Return a string in the following format:
  "Hi, my name is {firstName} {lastName}. I am {age} years old and work as a
  {occupation} in {location}."
*/

function question1(personObj) {
  // TODO
  const {
    firstName,
    lastName,
    age,
    occupation,
    location

  } = personObj
  return `Hi, my name is ${firstName} ${lastName}. I am ${age} years old and work as a ${occupation} in ${location}.`


}

/**
  Question 2:
  Write a function that receives a 'car' object as a parameter. This object
  contains information about the car (`make`, `model`, `price`). One of the
  properties is a method named `sayPrice`.

  Update the car's price to be 3000. Then call the `sayPrice` method and return
  the result.
*/

function question2(carObj) {
  // TODO
  }

/**
  Question 3:
  Write a function that receives an array of 'dog' objects as a parameter. Each
  object contains information about the dog (`name`, `weeksOld`).

  Filter the dogs so that they are all over 3 weeks old. Then use the map
  method to loop over the filtered dogs to make a new array of dogs names.
  Return the array of dogs names that are more than 3 weeks old.
*/

function question3(dogs) {
  // TODO
  return /* ??? */
}

/**
  Question 4:
  Using DOM methods select the element with the id `root`. Also the select the
  element with the class `wrapper`.

  Return both elements in an object with the following keys: `id` for the
  element with the id `root` and `class` for the element with the class
  `wrapper`.

  NOTE: we have set up the tests so that all of the DOM objects & methods are
  available in the tests. You do *not* need to open the tests in a browser.
*/

function question4() {
  return {
    /* ??? */
  }
}

/**
  Question 5:
  Write a function that creates a click event listener on the `#btn` element.

  The event listener should change the background color of the `#change-me`
  element to `blue` when the button is clicked.

  NOTE: we have set up the tests so that all of the DOM objects & methods are
  available in the tests. You do *not* need to open the tests in a browser.
*/

function question5() {
  // TODO
}

/**
  Question 6:
  Write a function that receives a Promise as a parameter and handles the
  successful response from the Promise. In the handler it should  concatenate
  the string: "I love " before the value from the Promise. Finally it should
  return the Promise so chaining can continue.
*/

function question6(promise) {
  // TODO
  return /* ??? */
}

/**
  Question 7:
  Write a function that uses the `fetch` function to make an AJAX GET call to
  'https://example.com'. Handle the successful response and convert it from
  JSON. Finally get the `hello` field from the response data and return it.
*/

function question7() {
  return fetch('https://example.com')
  // TODO
}

/**
  Question 8:
  Write a function that uses the `fetch` function to make an AJAX POST call to
  'https://example.com'.

  Do *not* handle the response (`.then` or `.catch`), as this has not been set
  up for you.
*/

function question8() {
  // TODO
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
}
