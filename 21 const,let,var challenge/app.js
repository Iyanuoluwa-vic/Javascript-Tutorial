// ## Variables #1

// 1. create "firstName" and "last_name" variables
// 2. assign your values
// 3. create "address" variable and assign "main street"
//    value to it
// 4. re-assign address to "first street" later
// 5. log all values in the console
const firstName = "John";
const lastName = "Smith";

let address = "123 Main Street";
address = "first street";
console.log(firstName, lastName, address);

// ## Concatenate Strings #2

// 1. create "street" and "country" variables
// 2. assign your values
// 3. create "fullMailingAddress" variable and assign
//    the result of "street + country"
// 4. remember about the space
// 5. log "fullMailingAddress" in the console

const street = "123's Main Street";
const country = "USA";
const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);

// ## Numbers #3

// 1. create "score1", "score2", "score3" variables and
//    assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score
// 4. create "plates" variable and assign 20
// 5. create "people" variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
// 9. log message

const score1 = 50;

const score2 = 42;
const score3 = 39;

const totalScore = score1 + score2 + score3;
const averageScore = (score1 + score2 + score3) / 3;

console.log(averageScore);
console.log(totalScore);

const plates = 11;
const people = 2;
let remainingPlate = plates % people;
console.log(remainingPlate);

remainingPlate++;
console.log(remainingPlate);

const message = "There are " + remainingPlate + " plates left";
console.log(message);

// ## Arrays #4

// 1. create "fruits" array and store some fruit values
// 2. setup the last item as number (random)
// 3. assign first fruit to the variable
// 4. re-assign last array item to the actual fruit
// 5. log both first fruit variable and entire fruits array

const fruits = ["apple", "banana", "orange", "grape", "strawberry", 10];

const firstFruit = fruits[0];
fruits[fruits.length - 1] = "kiwi";

console.log(fruits);
console.log(firstFruit);

// ## Functions #5

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars "order1","order2","order3"
// 5. call calculateTotal, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(200, 20);
const order3 = calculateTotal(300, 30);

console.log(order1, order2, order3);

//  changing it to a fuction expression
const total = function (subTotal, tax) {
  return subTotal + tax;
};

const order4 = total(100, 10);
const order5 = total(200, 20);
const order6 = total(300, 30);
console.log(order4, order5, order6);

// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

const car = {
  make: "ford",
  model: "mustang",
  year: "1832",
  colors: ["blue", "red", "yellow"],
  hybrid: true,

  drive: function () {
    console.log("driving");
  },
  stop: function () {
    console.log("stopping");
  },
};

console.log(car.make);
console.log(car.model);
console.log(car.colors[0]);
car.drive();
car.stop();

// # Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
  name: "John",
  age: 15,
  status: "resident",
};

const person2 = {
  name: "mike",
  age: 17,
  status: "tourist",
};

if (person1.age > 18 || person1.status == "resident") {
  console.log("age is greater than 18 and status is resident");
} else {
  console.log("age is not greater than 18 and status is not resident");
}

if (person2.age > 18 || person2.status == "resident") {
  console.log("age is greater than 18 and status is resident");
} else {
  console.log("age is not greater than 18 and status is not resident");
}
