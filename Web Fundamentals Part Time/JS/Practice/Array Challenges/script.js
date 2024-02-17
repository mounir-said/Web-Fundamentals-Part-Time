// Always Hungry
function alwaysHungry(arr) {
  let foodCount = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "food") {
          console.log("yummy");
          foodCount++;
      }
  }
  if (foodCount === 0) {
      console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]); 
alwaysHungry([4, 1, 5, 7, 2]); 


// High Pass Filter
function highPass(arr, cutoff) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
          filteredArr.push(arr[i]);
      }
  }
  return filteredArr;
}

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

// Better than average
function betterThanAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  let average = sum / arr.length;

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > average) {
          count++;
      }
  }
  return count;
}

result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 


// Array Reverse
function reverse(arr) {
  let arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
  }
  return Arr;
}

result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 




// Fibonacci Array
function fibonacciArray(n) {
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr;
}

result = fibonacciArray(10);
console.log(result); 
