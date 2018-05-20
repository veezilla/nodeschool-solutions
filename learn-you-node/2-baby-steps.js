// BABY STEPS (Exercise 2 of 13)
// 
// Write a program that accepts one or more numbers as command-line arguments
// and print the sum of thosenumber to the console (stdout).

let argumentSum = 0;

for (let i = 2; i <= process.argv.length - 1; i++) {
    argumentSum += Number(process.argv[i]);
}

console.log(argumentSum);