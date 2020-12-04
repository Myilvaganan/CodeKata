// Getting input via STDIN
const readline = require("readline");
// Given a number N, print the sum of squares of all its digits.
// Input Size : 1 <= N <= 100000
// Sample Testcase :
// INPUT
// 12
// OUTPUT
// 5
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

var lbh= userInput[0].split("");

var square=0;

for(i=0;i<lbh.length;i++)
{
      var n= parseInt(i);
      
    square+= Math.pow(lbh[n],2) ;
}
console.log(square);
  //end-here
});