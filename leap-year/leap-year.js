/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

// import moment node module
import moment from "moment";

// Accepts a year as user input from the command line with `process.argv`
let year = process.argv[2];

// Uses the Moment.js library to determine if the year is a leap year
let isLeapYear = moment([year]).isLeapYear();

// Outputs a friendly message with the result
if (isLeapYear) {
  console.log(`${year} is a leap year!`);
} else {
  console.log(`${year} is not a leap year!`);
}