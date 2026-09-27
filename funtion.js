// 1.Create a function to print your name

// function greet() {
//     // your code
// }

function greet() {
  console.log(" Hello Alok Yadav");
}

greet();

// 2.Create a function to add two numbers
// Create a function add(a, b) that prints the sum of two numbers.

function add(a, b) {
  console.log(a + b);
}
add(20, 21);

// 3.Create a function to subtract two numbers
// Create subtract(a, b) that returns the difference.

function subt(a, b) {
  console.log(a - b);
}

subt(20, 11);

// 4.Create a function to multiply two numbers
// Create multiply(a, b) and return the result.

function mult(a, b) {
  console.log(a * b);
}

mult(10, 10);

// 5.Create a function to divide two numbers
// Create divide(a, b) and return the result.

function div(a, b) {
  console.log(a / b);
}
div(10, 2);

// 6.Calculate the square of a number
// Create square(number) that returns the square.

function sur(a) {
  return a * a;
}
console.log(sur(4));

// 7.Calculate the area of a rectangle
// Create rectangleArea(length, width) that returns the area.

function ractArea(length, width) {
  return length * width;
}
console.log(ractArea(12, 8));

// 8.Convert Celsius to Fahrenheit
// Create celsiusToFahrenheit(celsius) that returns the temperature in Fahrenheit.

function celTofer(celsius) {
  return celsius * (9 / 5) + 32;
}

console.log(celTofer(35));

// 9.Check even or odd
// Create checkEvenOdd(number) that returns "Even" or "Odd".

function checkEvnOdd(number) {
  if (number % 2 === 0) {
    return "Number is Even";
  } else {
    return "Number is Odd";
  }
}

console.log(checkEvnOdd(12));

// 10.Find the greater number
// Create findGreater(a, b) that returns the greater of the two numbers.

function bigSmall(a, b) {
  if (a > b) {
    return "A is Bugger then B";
  } else {
    return "B is Bigger Then A";
  }
}

console.log(bigSmall(12, 33));

// 11.Check voting eligibility
// Create checkAge(age) that returns "Eligible" if age is 18 or above, otherwise "Not Eligible".

function checkAge(age) {
  if (age < 18) {
    return "You are Minor Kid";
  } else {
    return "You can Enjoy this boy";
  }
}

console.log(checkAge(17));

// 12.Check positive, negative, or zero
// Create checkNumber(number) that returns:

// "Positive"
// "Negative"
// "Zero"

function posNegZer(number) {
  if (number >= 1) {
    return "Nuber is positive";
  } else if (number <= -1) {
    return "Number is negative";
  } else {
    return "Number is zero";
  }
}
console.log(posNegZer(0));

// 13.Find the largest of three numbers
// Create largest(a, b, c) that returns the largest number.

function large(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(large(8, 33, 133));

// 14.Check whether a number is divisible by 5
// Create isDivisibleBy5(number) that returns "Yes" or "No".

function divbfiv(number) {
  if (number % 5 === 0) {
    return "Yes";
  } else {
    return "Noo";
  }
}

console.log(divbfiv(20));

// 15.Calculate grade
// Create calculateGrade(marks):

// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// Below 60 → "F"

function calcgrdMark(mark) {
  switch (true) {
    case mark < 60:
      return "F";

    case mark >= 60 && mark <= 69:
      return "D";

    case mark >= 70 && mark <= 79:
      return "C";

    case mark >= 80 && mark <= 89:
      return "B";

    case mark >= 90 && mark <= 100:
      return "A";

    default:
      return "Enter Your Mark";
  }
}

console.log(calcgrdMark(88));

// 16.Calculate the factorial
// Create factorial(number) that returns the factorial using a for loop.

// Example:

// factorial(5) → 120

function fact(numb) {
  let num = 1;
  for (let i = 1; i <= numb; i++) {
    num = num * i;
  }
  return num;
}

console.log(fact(5));

// 17.Reverse a number
// Create reverseNumber(number) that returns the reversed number.

// Example:

// reverseNumber(12345) → 54321

// 18.Count vowels in a string
// Create countVowels(str) that returns the number of vowels.

// Example:

// countVowels("javascript") → 3

function countVowels(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str.charAt(i))) {
      result++;
    }
  }
  return result;
}

console.log(countVowels("javascript"));

// 19.Find the largest number in an array
// Create findLargest(numbers) that returns the largest value.

// let numbers = [25, 67, 43, 89, 12, 76];

let numbers = [25, 67, 43, 89, 12, 76];

function largestt(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(largestt(numbers));

// 20.Create a calculator function
// Create a function:

// calculator(a, b, operator)

// It should perform:

// + addition
// - subtraction
// * multiplication
// / division

// Example:

// calculator(10, 5, "+") // 15
// calculator(10, 5, "*") // 50

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;

    default:
      return "Invalid Operator";
  }
}

console.log(calculator(10,3,"+"))
console.log(calculator(3, 3, "*"));
console.log(calculator(103, 3, "-"));
console.log(calculator(10, 2, "/"));
console.log(calculator(10, 3, "#"));

