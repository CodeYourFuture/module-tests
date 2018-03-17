/**
  +++++++++++++++++++++++++++++++++++++++++++
  Welcome to JS Test 1!
  Please answer the following questions by
   filling in the parts marked with TODO:

  Please UNCOMMENT each function, and its associated 
  name in the module.exports object at the bottom of the file,
   as you reach them.
*/

/**
  Question 1
  Comparing a string with ‘Code Your Future’, 
  return true if they are the same or
  false otherwise

  The function takes the following argument:
  @param {string} name1 a string
  @returns {boolean} true or false
*/

function question1(name1) {
  // console.log('Q1 called');
  if (name1 === 'Code Your Future') {
    return true;
  } else {
    return false;
  }
}



/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 2:
  IF / ELSE Statements:
  Check if two numbers are equal, if they are
   return true or otherwise return false
  @param {number} number1 a regular integer
  @param {number} number2 a regular integer
  @returns {boolean} true or false
*/

function question2( number1, number2) {
  console.log('Q2 called');
   if (number1 === number2) {
    
    // TODO:
     return  true;
   } else {
    //  TODO:
    return false;
  
    }
  (number1 === number2) 
  return true;
}


/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 3:
  Is the number even or odd?
  @param {number} number1 a regular integer
  @returns {string} odd or even
*/

function question3(number1) {
  // for ( let i=0;i < number1.length; i++)
  if (number1 % 2 === 0) {
    return "even";
  } else {
    return  "odd";
  }
}

// function question3(number1) {
//   +  if (number1 % 2 === 0) {
//   +    return "even";
//   +  } else {
//   +    return "odd";
//   +  };
//   +};

/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 4:
  Write a for loop that loops over the numbers 
  from 0 to 100, returning an array containing 
  only every second number. 
  So it should return [ 0, 2, 4, 6, 8, 10 .... etc.]

  @param none
  @returns [array 0 ... 100] 
*/

 function question4() {
   var newNumb= []
   // TODO
   for ( i=0; i<=100; i++ ) {
  if( i%2 === 0){newNumb.push(i)}
    // TODO else {continue}
   }
   return newNumb;
   }
// function question4() {
//   +  var newArr = [];
//   +  for (i = 0; i <= 100; i++) {
//   +    if (i % 2 === 0) {
//   +      newArr.push(i);
//   +    } else { continue }
//   +  };
//   +  return newArr;
//   +};


/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 5:
  Write a function called multiply that multiplies
   two numbers together. It should take two numbers 
   as parameters and return the answer.

  @param { num1, num2 } two mumbers; 
  integer, float, either negative or positive
  @returns the product of num1 and num2 
*/

function question5(num1, num2) {
  // TODO
  product = Math.round( num1*num2 )/num2
  // parseFloat(Number(num1*num2).toPrecision(2));
  
return product;

}
  



/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 6:
  Write a function called multiply that multiplies 
  two numbers together. It should take two numbers 
  as parameters and return the answer.

  @param { animArr } an array containing the names of
   a number of animals
  @returns { string } in the format...
    "The array contains { number of animals } animals.
     These are: {animal1} and {animal2} and {animal3}."
*/

// function question6( animArr ) {
//   // TODO

//   return /* ??? */;
// }


/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 7:
  Write a function to use a 'person' object containing
   their details as 5 key/value pairs

  @param { personObj } an array containing the names
   of a number of animals
  @returns { string } in the format...
    "Hi, my name is {firstName} {lastName}. I am {age}
     years old and work as a {occupation} in {location}."
*/

function question7( personObj ) {
   for ( let i=0; i<=personObj.length ;i++)
  
  // TODO
  var pers=("Hi my name is"+"--"+ personObj.firstName +'--' 
  +personObj.lastName+'--'+ personObj.age+'--' + 
  personObj.occupation +'--' 
 + personObj.location); 
 return pers;
}
// console.log("Hi my name is"+"--"+ personObj.firstName +'--' 
// +personObj.lastName+'--'+ personObj.age+'--' + 
// personObj.occupation +'--' 
// + personObj.location); 


/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 8:
  Write a function to concatenate two arrays, 
  then add an additional item to the resulting array.
   The two input arrays must not be modified.

  @param { arr1, arr2, strExtra } two arrays,
   each containing 3 items, and a string value as 
   the additional item
  @returns { newArr } containing 7 items
*/

 function question8( arr1, arr2, strExtra ) {
 let concaArr= arr1.concat(arr2, strExtra)
// //   // TODO
   return concaArr;
 }

/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 9:
  Write a function that takes a retail price and returns
   that price with VAT 

  @param { retailPrice, taxAmount } two 
  - retailPrice: string containing the currency and an integer,
   float, either negative or positive
  - taxAmount: a integer or float representing the tax amount
  @returns { totalPrice } a string containing the currency 
  sign too
*/

// function question9( retailPrice ) {
//   // TODO
  
//   return /* ??? */;
// }

/**
  +++++++++++++++++++++++++++++++++++++++++++
  Question 10:
  Write a high order function that takes a retail price and returns that price with VAT

  @param { retailPrice } two 
  - retailPrice: string containing the currency and an integer, float, either negative or positive
  - taxAmount: a integer or float representing the tax amount
  @returns { totalPrice } a string containing the currency sign too
*/

// function question10( retailPrice ) {
//   // TODO
//   return function extractDigits (retailPrice) {
//     // find the retail value as an integer, float
//     const retailValue = /* ??? */;

//     return function addTax (retailValue, taxAmount) {
//       // make the tax calculations
//       const retailValueWithTax = /* ??? */;

//       return function addCurrency ( retailValueWithTax, currency) {
//         // return final result as a string
//         return /* ??? */;
//       }
//     }
//   }
// }

module.exports = {
  question1,
  question2,
  question3,
   question4,
   question5,
  // question6,
   question7,
   question8, 
  // question9,
  // question10
};
