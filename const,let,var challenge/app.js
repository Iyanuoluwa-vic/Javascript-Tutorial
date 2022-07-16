// ## Variables #1
const firstName = "John";
const lastName = "Smith";

let address = "123 Main Street";
address = "first street";

console.log(firstName, lastName, address);

// ## Concatenate Strings #2

const street = "123 Main Street";
const country = "USA";

const fullMailingAddress = street + " " + country;

console.log(fullMailingAddress);

// ## Numbers #3
const score1 = 50;

const score2 = 42;
const score3 = 39;

const averageScore = (score1 + score2 + score3) / 3;
const totalScore = score1 + score2 + score3;

console.log(averageScore);
console.log(totalScore);

const plates = 10;
const people = 2;
let remainingPlate = plates - people;
remainingPlate = remainingPlate + 1;

console.log(remainingPlate);
