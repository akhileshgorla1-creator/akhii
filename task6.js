<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Calculator Examples</title>
</head>

<body>

<script>

// ==============================
// Example 1 : Basic Calculator
// ==============================

const basicCalculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero")
};

console.log("Addition:", basicCalculator.add(10, 5));
console.log("Subtraction:", basicCalculator.subtract(10, 5));
console.log("Multiplication:", basicCalculator.multiply(10, 5));
console.log("Division:", basicCalculator.divide(10, 5));


// ==============================
// Example 2 : Advanced Calculator
// ==============================

const advancedCalculator = {
  power: (a, b) => a ** b,
  square: (a) => a ** 2,
  cube: (a) => a ** 3,
  sqrt: (a) => Math.sqrt(a)
};

console.log("Power:", advancedCalculator.power(2, 3));
console.log("Square:", advancedCalculator.square(6));
console.log("Cube:", advancedCalculator.cube(4));
console.log("Square Root:", advancedCalculator.sqrt(25));


// ==============================
// Example 3 : Percentage & Average
// ==============================

const percentageCalculator = {
  percentage: (value, total) => {
    if (total === 0) return "Invalid total";
    return (value / total) * 100;
  },

  average: (...nums) => nums.reduce((sum, num) => sum + num, 0) / nums.length
};

console.log("Percentage:", percentageCalculator.percentage(45, 50) + "%");
console.log("Average:", percentageCalculator.average(10, 20, 30, 40));


// ==============================
// Example 4 : Discount Calculator
// ==============================

const discountCalculator = {
  discountPrice: (price, discount) => {
    const saved = (price * discount) / 100;
    return price - saved;
  }
};

console.log("Final Price:", discountCalculator.discountPrice(2000, 20));


// ==============================
// Example 5 : Age Calculator
// ==============================

const ageCalculator = {
  age: (birthYear, currentYear) => currentYear - birthYear
};

console.log("Age:", ageCalculator.age(1998, 2026));


// ==============================
// Example 6 : BMI Calculator
// ==============================

function bmi(weight, height) {
  const result = weight / (height * height);
  return result.toFixed(2);
}

console.log("BMI:", bmi(65, 1.7));


// ==============================
// Example 7 : Temperature Converter
// ==============================

const temperatureCalculator = {
  celsiusToFahrenheit: (c) => (c * 9 / 5) + 32,
  fahrenheitToCelsius: (f) => (f - 32) * 5 / 9
};

console.log("30°C in Fahrenheit:", temperatureCalculator.celsiusToFahrenheit(30));
console.log("86°F in Celsius:", temperatureCalculator.fahrenheitToCelsius(86));


// ==============================
// Example 8 : Simple Interest
// ==============================

function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

console.log("Simple Interest:", simpleInterest(10000, 5, 2));

</script>

</body>
</html>