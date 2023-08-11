// ------------------------------------------> Display in the console ex. 1 <----------------------------
//----> The numbers from 1 to 20 on a single line as text separated by ";" like this: 1;2;3;4;5;6...
//----> (use string concatenation to achieve the result)

function setArray() {
  let output = "";

  for (let i = 1; i <= 20; i++) {
    if (output) {
      output += i + ';';
    } else {
      output += i + ';';
    }
  }

  return output;
}

console.log(setArray());







// -------------------------------------------> Display in the console ex. 2 <-----------------------------------
//----> The odd numbers from 1 to 20 (each on it's own line)


function setOddNumbers() {
  for (let i = 1; i <= 20; i++) {
    if ((i % 2) !== 0) {
      console.log(i);
    }
  }
}

setOddNumbers();




// -----------------------------------------> Return ex. 1 <------------------------------------------------
// ---> Computes the minimum of all the numbers in an array and returns it
// ---> (don't use Math.min or any built in function, use control structures) (function minOfArr(arr) { } )

function minOfArr(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

let arrNumbers = [-10, 0, 1, -30, 7, 19, -23, 44];

let displayMin = minOfArr(arrNumbers);

console.log(displayMin);







// -----------------------------------------------------> Return ex. 2 <----------------------------------------------
// ---> Computes how many times a certain item appears in an array and returns the number (function countItem(arr, item) { } )


function countItem(arr, item) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      count++;
    }
  }

  return count;
}

let arrValues = [-10, 1, 19, -30, 1, 19, -23, 44, 57, -30, -30, 1, 1, 7];
let checkNumber = 1;

let howManyTimes = countItem(arrValues, checkNumber);

console.log(howManyTimes);








// ---------------------------------------------------> Challenges ex. 1 <---------------------------------------------
// ---> Using nested for statements (unul intr-altul) generate the following pattern in the console
// (hint: each line can be a line of text separated by space like in the first point of the homework)
// (you can console.log directly from the function)

function displaySequence(maxIteration) {
  
  for (let i = 0; i < maxIteration; i++) {
    let output = "";

    if (i % 2) {
      for (let j = 1; j <= maxIteration; j++) {
        output += (j % 2) + " ";
      }
    } else {
      for (let j = 0; j < maxIteration; j++) {
        output += (j % 2) + " ";
      }
    }

    console.log(output);
  }
}

let numberOfSequence = 4;

displaySequence(numberOfSequence);







// --------------------------------------------------------> Challenges ex. 2 <-----------------------------------------------
// Create a function that takes one number as the input and returns a ';'
// separated string of all numbers starting from 1 going all the way up to the input one by one.
// Replace numbers that are divisible by 3 with 'fizz'.
// Replace numbers divisible by 4  with 'buzz', and
// numbers divisible by both 3 and 4 with 'fizzbuzz'. function fizzbuzz(num) { }
// What would you do for numbers smaller than 1? Handle that situation.

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 4 === 0) {
    num = `fizzbuzz`;
  } else {
    if (num % 3 === 0) {
      num = `fizz`;
    } else {
      if (num % 4 === 0) {
        num = `buzz`;
      } else {
        num;
      }
    }
  }

  return num;
}

// let setInputNumber = prompt(`Please provide a number!`);
// let castingNumber = Number(setInputNumber);
let castingNumber = 16;
let output = "";

if (castingNumber < 1) {
  alert(`Please provide a value greater than or equal to 1.`);
} else {
  for (let i = 1; i <= castingNumber; i++) {
    let j = fizzBuzz(i);

    if (j == "fizz" || j == "buzz" || j == "fizzbuzz") {
      output += j + "; ";
    } else {
      output += i + "; ";
    }
  }

  console.log(output);
}
