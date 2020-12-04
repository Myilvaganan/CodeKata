/*You are given some words all in lower case letters your task is to print them in sorted order.

Input Description:
You are given a string ‘s’

Output Description:
Print the string in sorted order

Sample Input :
virat kohli
Sample Output :
kohli virat*/
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

var nameSort= userInput[0].split(" ");

var a= nameSort.sort();

console.log(a.join(" "));

  //end-here
});