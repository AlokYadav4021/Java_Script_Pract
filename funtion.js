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
