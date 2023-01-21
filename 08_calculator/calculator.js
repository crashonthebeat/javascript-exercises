const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sol = 0;

  for (let i = 0; i < numbers.length; i++) {
    sol += numbers[i];
  }
  return sol
};

const multiply = function(numbers) {
  let product = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    product *= numbers[i]
  }

  return product
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let sum = 1;

  for (let i = num; i > 1; i--) {
    sum *= i;
  }

  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
