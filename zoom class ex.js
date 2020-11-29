const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
var dummy = userInput[0].split(" ");

var sum = parseInt(dummy[0]) + parseInt(dummy[1])+ parseInt(dummy[2]);

var dummy1 = userInput[1].split(" ");

var sum1 = parseInt(dummy1[0]) + parseInt(dummy1[1])+ parseInt(dummy1[2]);

var dummy2 = userInput[2].split(" ");

var sum2 = parseInt(dummy2[0]) + parseInt(dummy2[1])+ parseInt(dummy2[2]);

var total = sum+ sum1+sum2;



console.log(total);
//end-here
});


//A Simple Hello World
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
var arr = ["test",123, 45]
var str = "";
for(i = 0; i<arr.length; i++)
{
    str = str + arr[i] + " ";
}
console.log(str.trim());

//end-here
});




console.log(userInput);
var total = 0;
for(var i=0; i<userInput.length; i++)
{
    var dummy = userInput[i].split(" ");
    console.log(dummy);
    for(var j =0; j<dummy.length; j++)
    {
        total = total + parseInt(dummy[j]);
    }
}
console.log(total);
