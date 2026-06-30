# Leap Year Checker 🗓️

---

## 📌 Your Task

A **leap year** is a year with one extra day (February 29th) added to its calendar, making it **366 days** long instead of the usual 365.

Your task is to make is a simple Node.js app that:
* Accepts a year as user input from the command line with `process.argv` 
* Uses the [Moment.js](https://www.npmjs.com/package/moment) library to determine if the year is a leap year
* Outputs a friendly message with the result

---

## 🧠 Learning Goals 

You will practice: 

* Getting user inputs from the command line with `process.argv`
* Installing a Javascript library as a third-party node module 
* Reading documentation to figure out how to use a library

---

## Getting Started

### 1. Navigate to the `leapYear` project folder
Use `cd`, `ls`, and `pwd` to help you navigate into the `leapYear` folder. 

### 2. Install Moment.js
This command will install the Moment library into your current project folder (which should be `leapYear`) as a dependency.

```bash
npm install moment
```

### 3. Explore Moment.js documentation

* Search through the [Moment.js library documentation](https://momentjs.com/docs/) to find the `isLeapYear()` function that determines whether a year is a leap year.
* Hint: Use `Command + F` (Mac) or `Ctrl + F` (Windows) to search for "is leap year".

### 4. Test the function

Try calling the function in your code using hardcoded years:

```javascript
console.log(moment([2000]).isLeapYear()); // true
console.log(moment([2011]).isLeapYear()); // false
```

### 5. Accept user input

Modify your program to use `process.argv` to accept the year from the command line.

### 6. Run test cases

Running these test cases and checking the output will help you confirm that your app is running properly. 

```bash
node leapYear.js 2024
# Output: 2024 is a leap year!

node leapYear.js 1979
# Output: 1979 is not a leap year!
```

---

## Resources

* [Moment.js Documentation](https://momentjs.com/docs/)
* [Moment.js NPM Page](https://www.npmjs.com/package/moment)

