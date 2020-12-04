// Given a string S, print 'yes' if the strings 'GUVI' and 'GEEK' is present case-sensitively in the string else print 'no'.
// Input Size : 1 <= 100
// Sample Testcase :
// INPUT
// Vishal_Sundar prepared this question
// OUTPUT
// no


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

var a= "GUVI";

var b= "GEEK";

var d= "GUVIGEEK";

var input= userInput[0].split(" ");


if (input.includes(a) && input.includes(b) || input.includes(d)){
    console.log("yes");
}else{
     console.log("no");
}



  //end-here
});