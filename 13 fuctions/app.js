// creating a fuction
function hello() {
  console.log("Hello james");
  console.log("Hello peter");
  console.log("Hello kike");
}

//  invoke the function
hello();
hello();

// passing in arguments to the function
function greet(name) {
  console.log("hello there " + name);
}
greet("james");

// returning from the function call
width = 12;
height = 123;

function area(width, height) {
  return (area = width * height);
}

console.log("calculated area is " + area(width, height));

// fuction expresssion

// instead of creating a function
function newArea(width, height) {
  return (area = width * height);
}

// a fuction expresssion was used
const getArea = function (width, height) {
  return width * height;
};

console.log(getArea(width, height));
