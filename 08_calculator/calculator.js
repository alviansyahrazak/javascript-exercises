const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(numbers) {
  let sumArray = numbers.reduce((total, value) =>  total + value, 0)

  return sumArray
};

const multiply = function(numbers) {
  let multiplyArray = numbers.reduce((total, value) => total * value)

  return multiplyArray
};

const power = function(number1, number2) {
	return Math.pow(number1, number2)
};

const factorial = function(numbers) {
  if (numbers === 0 || numbers === 1) {
    return 1;
  }

  return numbers * factorial(numbers - 1);
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
