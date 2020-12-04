/*Given a sentence and string S, find how many times S occurs in the given sentence.If S is not found in the sentence print -1
Input Size : |sentence| <= 1000000(complexity O(n)).
Sample Testcase :
INPUT
I enjoy doing codekata
codekata
OUTPUT
1*/// Getting input via STDIN


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

  var checkString= userInput[0];


var checker= userInput[1];


if(checkString.includes(checker))
{
    console.log("1");
}else{
    console.log("-1");
}


  //end-here
});