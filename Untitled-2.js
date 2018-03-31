/**
  +++++++++++++++++++++++++++++++++++++++++++
  Welcome to JS Test 1!
  Please answer the following questions by filling in the parts marked with TODO:

  Please UNCOMMENT each function, and its associated name in the module.exports object at the bottom of the file, as you reach them.
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
    // let string="Code Your Future";
    
       // TODO:
     
      
    };
    // console.log(question1());
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 2:
      IF / ELSE Statements:
      Check if two numbers are equal, if they are return true 
      or otherwise return false
      @param {number} number1 a regular integer
      @param {number} number2 a regular integer
      @returns {boolean} true or false
    */
    
    function question2(number1, number2) {
      
      
        // TODO:
        
        // TODO:
       
    };
    // console.log(question2(199, 204));
    
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 3:
      Is the number even or odd?
      @param {number} number1 a regular integer
      @returns {string} odd or even
     */
    
     function question3 ( number1) {
     
    };
    
    /**
      // +++++++++++++++++++++++++++++++++++++++++
    /** 
      Question 4:
      Write a for loop that loops over the numbers 
      from 0 to 100, returning an array containing 
      only every second number. So it should return [ 
    //     0, 2, 4, 6, 8, 10 .... etc.]
    // @param none
    //   @returns [array 0 ... 100] 
    // */
    // // +++++++++++++++++++++++++++++++++++++++++
    function question4() {
    
      };
    
    
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 5:
      Write a function called multiply that multiplies two numbers together. 
      It should take two numbers as parameters and return the answer.
      @param { num1, num2 } two mumbers; integer, float, either negative or positive
      @returns the product of num1 and num2 
    */
    
    function question5(num1, num2) {
      // TODO
    
      
    };
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 6:
    
      Write a function that takes an array as a parameter, 
      establishes how many items it contains, and then writes
       out the names of the animals into a string.
    
    // //   @param { animArr } an array containing the 
    // //   names of a number of animals
    // //   @returns { string } in the format...
    // //     "The array contains { number of animals } 
    // //     animals. These are: {animal1} and {animal2} and {animal3}."
    // // */
    
    function question6 (animArr) {
      // const animals = ['lions', 'tigers', 'bears'];
      // TODO
    for(let i=0; i<=animals.length; i++){
      return "The array contains " + animArr.length + 
          " animals. " + "These are: " + animArr[0] + " and " + animArr[1] +  " and " + animArr[2] + "."
    }
    };
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 7:
      Write a function to use a 'person' object containing their details
       as 5 key/value pairs
    
      @param { personObj } an array containing 
      the names of a number of animals
    //   @returns { string } in the format...
    //     "Hi, my name is {firstName} {lastName}. 
    //     I am {age} years old and work as a {occupation} in {location}."
    // */
    const person = {
      firstName: 'Sara',
      lastName: 'Marshall',
      age: 25,
      occupation: 'dentist',
      location: 'Warrington'
    }
    
    function question7( personObj ) {
      for( let i=0; i<= personObj.length; i++)
     console.log ("Hi, my name is" +  personObj.firstName +  personObj.lastName +
        "I am" +   personObj.age + "years old and work as a" +   personObj.occupation + "in" +  person.location)
    // TODO
    return  "Hi, my name is " +  personObj.firstName  +  " "  +  personObj.lastName +
    ". I am " +   personObj.age + " years old and work as a " +   personObj.occupation + " in " +  person.location + "."
    };
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 8:
    //   Write a function to concatenate two arrays, then add 
    //   an additional item to the resulting array. The two input
    //    arrays must not be modified.
    
    //   @param { arr1, arr2, strExtra } two arrays, each containing 
    //   3 items, and a string value as the additional item
    //   @returns { newArr } containing 7 items
    // 
    */
    // const array1 = ["lions", "tigers", "bears"];
    // const array2 = ["penguins", "flamingoes", "eagles"];
    // const extra  = "cobras";
    
      function question8( arr1, arr2, strExtra ) {
        let allarray=arr1.concat(arr2, strExtra)
      return allarray;
      //     TODO
        };
    // console.log(allarray); 
    /**
      +++++++++++++++++++++++++++++++++++++++++++
    //   Question 9:
    //   Write a function that takes a retail price and returns that price with VAT 
    
    //   @param { retailPrice, taxAmount } two 
    //   - retailPrice: string containing the currency and an integer, float, either negative or positive
    //   - taxAmount: a integer or float representing the tax amount
    //   @returns { totalPrice } a string containing the currency sign too
    // */
    // let retailPrice=10;
    // let taxAmount=0.2;
    // let stringToRemove="£10"
    // slice the £ off the "£15"
    // The parseInt() function parses a string argument and returns an integer 
    function question9 (retailPrice, taxAmount) {
     // TODO
    return ( "£" + (parseInt(retailPrice.slice(1) * 0.2) +  
      (parseInt(retailPrice.slice(1)))));
    };
    // console.log(   question9 (stringToRemove, 0.2));
    /**
      +++++++++++++++++++++++++++++++++++++++++++
      Question 10:
      Write a high order function that takes a retail price and returns that price with VAT
    
      @param { retailPrice } two 
      - retailPrice: string containing the currency and an integer, float, either negative or positive
      - taxAmount: a integer or float representing the tax amount
      @returns { totalPrice } a string containing the currency sign too
    */
    
    // it("Q10 - Tax addition part2", function() {
    //   const tax = 0.2;
    //   const retailPrice = "£15"
    //   solution = exercises.question10(retailPrice);
    //   expect(solution).toEqual("£18")
    // })
    // });
    function question10( retailPrice ) {
      // TODO
      return function extractDigits (retailPrice) {
        // find the retail value as an integer, float
        // slice the £ off the "£15"
        // The parseInt() function parses a string argument and returns an integer 
        const retailValue = (parseInt(retailPrive.slice(1)));
        // the line below .replace can be used instead of .slice
        // const retailValue  = retailPrice.replace(/[^0-9\.]+/g,"");
        const taxAmount= 0.2;
    
        return function addTax (retailValue, taxAmount) {
          // make the tax calculations
          // calculate the 0.2% of the retail price and add the retail price to get the tax
          const retailValueWithTax =  (retailPrice * taxAmount )+ retailPrice;
            var currency= "£";
          
            return function addCurrency ( retailValueWithTax, currency) {
            // return final result as a string
            return  "£" + retailValueWithTax;
          }
        }
      }
    }
    // console.log( question10( retailPrice ));
    
    module.exports = {
      question1,
      // question2,
      // question3,
      // question4,
      // question5,
      // question6,
      // question7,
      // question8, 
      // question9,
      // question10
      };