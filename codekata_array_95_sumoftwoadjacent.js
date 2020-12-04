// Given a number N and an array of N elements, find the sum of the sums obtained by considering all consecutive pairs of adjacent elements.
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 5
// 1 2 3 4 5
// OUTPUT
// 24((1+2)+(2+3)+(3+4)+(4+5))

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


var num= userInput[0];
var arr= userInput[1].split(" ");


var sum=0;

for(i=0;i<arr.length-1;i++){
    
 sum= sum+ parseInt(arr[i]) +parseInt(arr[i+1]);
    
}


console.log(sum);

  //end-here
});