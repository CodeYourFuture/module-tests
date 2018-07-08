var exercises = require('./module2');

describe('Module 2 Answers', function() {
  // This function is run before every test. Don't worry if you don't
  // understand it. It is provided for you to run the tests correctly
  var globalFetch = global.fetch
  beforeEach(function() {
    // Empty out the DOM so it has no elements inside it
    document.body.innerHTML = ''
    // Reset the fetch function
    global.fetch = globalFetch
  })

  it('Q1 - Person object', function () {
    var person = {
      firstName: 'Sara',
      lastName: 'Marshall',
      age: 25,
      occupation: 'dentist',
      location: 'Warrington'
    }
    var solution = exercises.question1(person);
    expect(solution).toEqual('Hi, my name is Sara Marshall. I am 25 years old and work as a dentist in Warrington.');
  });

  it('Q2 - Car object updating', function() {
    var car = {
      make: 'Ford',
      model: 'Fiesta',
      price: 5000,
      sayPrice: function() {
        return 'The price is ' + this.price
      }
    };
    var solution = exercises.question2(car);
    expect(solution).toEqual('The price is 3000');
  });

  it('Q3 - Filtering and mapping array of dogs', function() {
    var dogs = [{
      name: 'Lassy',
      weeksOld: 2
    }, {
      name: 'Chewie',
      weeksOld: 10
    }, {
      name: 'Scout',
      weeksOld: 5
    }];

    var solution = exercises.question3(dogs);
    expect(solution).toEqual(['Chewie', 'Scout']);
  });

  it('Q4 - Selecting classes and ids', function() {
    var root = document.createElement('div');
    root.id = 'root';
    var wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    root.appendChild(wrapper);
    document.body.appendChild(root);

    var solution = exercises.question4();
    expect(solution.id).toEqual(root);
    expect(solution.class).toEqual(wrapper);
  });

  xit('Q5 - Event listener', function() {
    var changeMe = document.createElement('div');
    changeMe.id = 'change-me';
    var button = document.createElement('button');
    button.id = 'btn';
    document.body.appendChild(changeMe);
    document.body.appendChild(button);

    exercises.question5();
    // Use JS to click on the button
    button.click();

    expect(changeMe.style.backgroundColor).toEqual('blue');
  });

  xit('Q6 - Promise', function() {
    var promise = Promise.resolve('CYF!');

    var solution = exercises.question6(promise);

    solution.then(function(value) {
      expect(value).toEqual('I love CYF!')
    });
  });

  xit('Q7 - Fetch GET', function() {
    // We don't want to actually call the `fetch` function because it might be
    // slow to respond or break. Instead we "mock" the `fetch` function to
    // return the same kind of Promise as we get from a normal `fetch` call
    // that resolves JSON
    global.fetch = function() {
      return Promise.resolve({
        json: function () {
          return {
            hello: 'Olá!'
          };
        }
      });
    };

    var solution = exercises.question7();

    solution.then(function(value) {
      expect(value).toEqual('Olá!')
    });
  });

  xit('Q8 - Fetch POST', function() {
    global.fetch = jest.fn();

    exercises.question8();

    expect(global.fetch).toHaveBeenCalled();
    // Expect to have fetched from https://example.com
    expect(global.fetch.mock.calls[0][0]).toEqual('https://example.com');
    // Expect to have made a POST request
    expect(global.fetch.mock.calls[0][1].method).toEqual('POST');
  });
});
