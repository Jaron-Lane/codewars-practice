// Problem 1 (kyu 8)

// Create a method take that accepts a list/array and a number n, and returns a list/array array 
// of the first n elements from the list/array.
// If you need help, here's a reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const array = ['0', '1', '2', '3', '4']

function take(arr, n) {
  return arr.slice(0, n)
}

const test = take(array, 3)

console.log(test)


// Problem 2 (kyu 8)

// Write function bmi that calculates body mass index (bmi = weight / height^2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

const calculateBmi = (weight, height) => {
  
    const bmi = (weight * 703) / (height * height)
  
    if (bmi <= 18.5) {
      return "Underweight"
    }
    else if (bmi <= 25.0) {
      return "Normal"
    } 
  
    else if (bmi <= 30.0) {
      return "Overweight"
    }
  
    else if (bmi > 30) {
      return "Obese"
    }
  }
  
  const test = calculateBmi(200, 74)
  
  console.log(test)

// Problem 3 (kyu 8)

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const kidAge = 5
const dadAge = 31

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

const test = twiceAsOld(31, 10)

// Problem 4 (kyu 8)

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up 
// to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

var list1 = [
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS',
  firstName: 'Danny', lastName: 'M.', country: 'Tajikistan', continent: 'Europe', age: 30, language: 'JavaScript' }
];

const countDevelopers = (list) => {
  // your awesome code here :)
  return list.filter(dev => dev.continent == 'Europe' && dev.language == 'JavaScript').length()
  }

// OR

const countDevelopers = (list) => {
  count = 0;
  for(i = 0; i < list.length; ++i){
      if(((list[i].continent) === 'Europe') && ((list[i].language) === 'JavaScript')) {
          count+=1;
      }
    }
  return count
  }
  
  const test = countDevelopers(list1)
  console.log(test)

// Problem 5 (kyu 8)

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

const abbrevName = (name) => {

  const nameArray = name.split(" ");

  const letterGetter = nameArray.map(n => n[0]).join(".")

  return letterGetter
}

const test = abbrevName("Jaron Lane")

console.log(test)