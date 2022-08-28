// creating a new object
const car = {
  make: "Ford",
  model: "Mustang",
  year: "1969",
  color: ["red", "blue", "green"],
  greeting: function js() {
    // return `Hello, I'm a ${this.make} ${this.model}`;
    return "Hello, I'm a " + this.make + " " + this.model;
  },
};

// accessing the objects properties
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.greeting());
console.log(car.color[0]);
