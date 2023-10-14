//use of console.log//
console.log("Aslamualikum Miss Iqra");
// Step 1: Set a variable value
let a = 10; // Set a value of 10

// Step 2: Print the value using console.log()
console.log(a); // This will output the value of 'a' to the console
// Use the prompt function to get user input and store it in a variable
let userInput = prompt("Please enter something:");

// Check if the user entered something
if (userInput !== null) {
  // Display the user's input using console.log
  console.log("You entered: " + userInput);
} else {
  // Handle the case where the user cancels the prompt
  console.log("User cancelled the prompt.");
}

/*
This is a multi-line comment.
It won't be executed as code.
*/

// This is a single-line comment.

console.log("Aslamualikum !"); // This is also a single-line comment.

// Generate a random decimal between 0 and 1
let randomDecimal = Math.random();
console.log("Random Decimal:", randomDecimal);

//Chap 2 OF Java Script//
//Ex : 2.1//
let str1 = 'Laurence';
console.log("str1",  typeof str1);
let str2 = "Svekis";
console.log("str2",  typeof str2);
let val1 = undefined;
console.log("val1",  typeof val1); 
let val2 = null;
console.log("val2",  typeof val2);
let myNum = 1000;
console.log("mynNum",  typeof myNum);

//Ex: 2.2//
let myname="areeba";
let myage=19;
let cancodejavascript= true;
console.log("my name is "+myname+"I am"+myage+"years old"+cancodejavascript+"that i can code in js");

//Ex:2.3//
// Define variables
let ai = 10;
let b = 5;
let  c = 3;

// Perform the actions//
b += ai; // Add b to a
ai /= c; // Divide a by c
c %= b; // Replace the value of c with the modulus of c and b

// Print the updated variables to the console
console.log("Updated value of a: " + ai);
console.log("Updated value of b: " + b);
console.log("Updated value of c: " + c);



//chapter 2 project//
// Define the distance in miles
var distanceInMiles = 130;

// Conversion factor from miles to kilometers
var milesToKilometers = 1.60934;

// Calculate the distance in kilometers
var distanceInKilometers = distanceInMiles * milesToKilometers;

// Log the result in the specified format
console.log("The distance of " + distanceInKilometers.toFixed(4) + " kms is equal to " + distanceInMiles + " miles");


//BMI calculator//

// Define height in inches and weight in pounds
let heightInInches = 70; // For example, 70 inches
let weightInPounds = 160; // For example, 160 pounds

// Conversion factors
let inchesToCentimeters = 2.54;
let poundsToKilos = 0.453592;

// Convert height and weight
let heightInCentimeters = heightInInches * inchesToCentimeters;
let weightInKilos = weightInPounds * poundsToKilos;

// Calculate BMI (Body Mass Index)
let heightInMeters = heightInCentimeters / 100; // Convert height to meters
let bmi = weightInKilos / (heightInMeters * heightInMeters);

// Output the results
console.log("Height: " + heightInInches + " inches is equal to " + heightInCentimeters + " cm");
console.log("Weight: " + weightInPounds + " pounds is equal to " + weightInKilos + " kg");
console.log("BMI: " + bmi.toFixed(2));
