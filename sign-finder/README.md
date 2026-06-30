# 💎 Sign Finder Challenge

## 📌 Your Task

In this exercise, you'll create a Node.js app that determines the **astrological** and **zodiac** signs for the user based on their birthday.

Your app should:

* take **3 numbers** as user inputs: month, day, and year
  (e.g., if a user's birthday is June 12, 1990, they would enter `6 12 1990`)
* use the [horoscope](https://www.npmjs.com/package/horoscope) 3rd party module to determine:

  * the **astrological sign** (e.g., Leo)
  * the **zodiac sign** (e.g., Goat)

## 🧠 Learning Goals

You will practice:

* Getting user inputs from the command line with `process.argv`
* Installing and using a 3rd party npm module
* Reading documentation to figure out how to work with functions from a library (`getSign()` and `getZodiac()`)

## 📌 Getting Started

1. Navigate into the `sign-finder` folder using `cd`, `ls`, and `pwd`
2. Install the horoscope npm module in your project folder:

    ```bash
    npm install horoscope
    ```

3. Check out the [horoscope npm module](https://www.npmjs.com/package/horoscope) and read its documentation to understand how `getSign()` and `getZodiac()` work.
4. Write your code in the file called `sign-finder.js`.
5. Test your code using the test cases below.

## 📖 Test Cases

### Test Case 1

Running `node sign-finder.js 1 1 1950` should output:

```bash
Your astrological sign is Capricorn and your zodiac sign is Tiger
```

### Test Case 2

Running `node sign-finder.js 8 12 1979` should output:

```bash
Your astrological sign is Leo and your zodiac sign is Goat
```

## 🏆 Bonus Challenge (Optional)

* Tell the user their **birthstone** based on their birth month!

