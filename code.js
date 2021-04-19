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

// Problem 2 (kyu 8)