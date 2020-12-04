/*Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
Sample Testcase :
INPUT
XCODE
OUTPUT
XOE CD*/// Getting input via STDIN
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
var check= userInput[0].split("");

var new1="";
var new2="";

for (i=0;i<check.length;i=i+2){
    new1= new1+ check[i];
}
for (i=1;i<check.length;i=i+2){
    new2= new2+ check[i];
}



console.log(new1+" "+new2);

  //end-here
});