/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

//import the horoscope module
import { getSign, getZodiac } from 'horoscope';
import horoscope from "horoscope";

// Get the user's birthday from the command line arguments using slice and map to convert them to numbers!
const [monthNum, dayNum, year] = process.argv.slice(2).map(Number);


// Validate the input to ensure that the user has provided valid numbers for month, day, and year - extra build out for fun to help the user understand the error to  speed up the process of getting the correct input.
if (isNaN(monthNum) || isNaN(dayNum) || isNaN(year)) {
    console.log("Please provide valid numbers for month, day, and year.");
    process.exit(1);
} else if (monthNum < 1 || monthNum > 12) {
    console.log("Please provide a valid month (1-12).");
    process.exit(1);
} else if (dayNum < 1 || dayNum > 31) {
    console.log("Please provide a valid day (1-31).");
    process.exit(1);
} else if (year < 1 || year > new Date().getFullYear()) {
    console.log("Please provide a valid year.");
    process.exit(1);
}
// Uses the horoscope library to determine the astrological and zodiac signs
let astrologicalSign = horoscope.getSign({ month: monthNum, day: dayNum });
let zodiacSign = horoscope.getZodiac(year);

// Outputs a friendly message with the result
console.log(`Your astrological sign is ${astrologicalSign} and your zodiac sign is ${zodiacSign}`);

