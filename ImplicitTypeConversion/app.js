//n certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion

// like this in the example below: num1 is a number, num2 is a string.so because of the implicit conversion, num2 is converted to a value which is then able to perform the - operation.

const num1 = 20;
const num2 = "10";
const result = num1 - num2;
console.log(result);

const num3 = 30;
const num4 = "10";
const result2 = num3 * num4;
console.log(result);

//for  example if it is a + operation, it will not be able to perform implicit conversion because it will think it is a concatenation operation.
// example below:

const num5 = 20;
const num6 = "10";
const result3 = num5 + num6;
console.log(result3);
