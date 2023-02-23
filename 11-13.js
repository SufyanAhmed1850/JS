// var input = prompt("Enter a character:");

// if (!isNaN(input)) {
//   document.write(input + " is a number.");
// } else {
//   var code = input.charCodeAt(0);

//   if (code >= 65 && code <= 90) {
//     document.write(input + " is an uppercase letter.");
//   }

//   else if (code >= 97 && code <= 122) {
//     document.write(input + " is a lowercase letter.");
//   } else {
//     document.write(input + " is not a number or letter.");
//   }
// }

// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   document.write(num1 + " is larger than " + num2 + ".");
// } else if (num2 > num1) {
//   document.write(num2 + " is larger than " + num1 + ".");
// } else {
//   document.write("The two integers are equal.");
// }

// var num = parseInt(prompt("Enter a number:"));

// if (num > 0) {
//   document.write(num + " is positive.");
// } else if (num < 0) {
//   document.write(num + " is negative.");
// } else {
//   document.write(num + " is zero.");
// }

// var letter = prompt("Enter a letter:");

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ||
//     letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
//   document.write("The letter " + letter + " is a vowel.");
// } else {
//   document.write("The letter " + letter + " is not a vowel.");
// }

// var correctPassword = "password123";
// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   document.write("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   document.write("Correct! The password you entered matches the original password.");
// } else {
//   document.write("Incorrect password.");
// }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

var inputTime = prompt("Enter time in 24-hour format (e.g. 19:00 for 7pm):");
var hour = parseInt(inputTime.substring(0, 2));
var minute = inputTime.substring(2, 4);
var meridian;

if (hour === 0) {
  hour = 12;
  meridian = "am";
} else if (hour === 12) {
  meridian = "pm";
} else if (hour > 12) {
  hour -= 12;
  meridian = "pm";
} else {
  meridian = "am";
}

document.write("The time in 12-hour clock format is: " + hour + ":" + minute + " " + meridian);
