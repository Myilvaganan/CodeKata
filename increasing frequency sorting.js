5
8 8 1 1 3


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
function sortByFrequency(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });
    

    for(var key in frequency){
        sortAble.push([key, frequency[key]])
    }

    sortAble.sort(function(a, b){
        return a[1] - b[1]
    })

    
    sortAble.forEach(function(obj){
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    })
    return newArr;
    
}


var array= userInput[1].split(" ");
console.log(sortByFrequency(array).join(" "))






//https://github.com/Myilvaganan/myil_guvi_preBootcamp.git
