//2
//Vishal
//Vidharba

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

var arr = userInput[0];

var arr1= userInput[1].split("");
var arr2= userInput[2].split("");
var newarr= [];

for(i=0;i< parseInt(arr); i++){
    
    if(arr1[i]===arr2[i]){
        newarr.push(arr1[i])
    }
    
    
}
    
console.log(newarr.join(""));                            





  //end-here
});