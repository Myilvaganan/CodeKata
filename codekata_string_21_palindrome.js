 /*Radha newly learnt about palindromic strings.A palindromic string is a string which is same when read from left to right and also from right to left.Help her in implementing the logic.

 

Input Description:
You are given a String ‘s’

Output Description:
Print 1 if String is palindrome or 0 if not

Sample Input :
NITIN
Sample Output :
1

*/




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
var string= userInput[0];

function palindrome(pal){
    
    var givenString= string.split("");
   
    var reverseString= givenString.reverse();
    
    var joinedReverStr= reverseString.join("");
    
   
    
   
    
    if(string===joinedReverStr){
        console.log("1");
    } else{
        console.log("0");
    }
    
    
    
}

palindrome();


  //end-here
});