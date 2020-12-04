// Given 2 numbers N,K and an array of N strings, find if any K consecutive strings are same.
// Input Size : K <= N <= 1000
// Sample Testcase :
// INPUT
// 5 3
// code
// overload
// vishal
// vishal
// vishal
// OUTPUT
// yes



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  console.log(userInput);

  //end-here
});