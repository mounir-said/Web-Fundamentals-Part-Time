// Print odds 1-20

console.log("Print odds 1-20:");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// Decreasing Multiples of 3

console.log("Decreasing Multiples of 3:");

for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// Print the sequence with a while loop

console.log(" the sequence:");

let sequence = [4, 2.5, 1, -0.5, -2, -3.5];
let i = 0;
while (i < sequence.length) {
  console.log(sequence[i]);
  i++;
}


// Sigma with a while loop

console.log("Sigma:");

let sum = 0;
let j = 1;
while (j <= 100) {
  sum += j;
  j++;
}
console.log(sum);


// Factorial

console.log("Factorial:");

let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);
