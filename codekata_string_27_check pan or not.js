/*Indian PAN card issuing authority have found some fake PAN cards. They have hired you so that you can validate PAN card for them. Your task is to develop a suitable algorithm which could check if pan is valid or not

1)Pan must have uppercase letters only.

2)It must be of 10 character only

3)From index 1 to 5 all must be letters(A-Z),last index must be letter

4)Rest all must be integer Starting from 1

Input Description:
You are given a input string which indicates the PAN number

Output Description:
Print 'pan' if it is valid PAN number, else print 'not pan'

Sample Input :
HXTPS2142R
Sample Output :
pan*/



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

var panId= userInput[0];

var regexpPAN= /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

if(regexpPAN.test(panId)){
    console.log("pan");
}else{
    console.log("not pan");
}


  //end-here
});