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

function find_duplicate_in_array(arra1) {
        var object = {};
        var result = "";

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        });

        var sortable = [];
for (var prop in object) {
    sortable.push([prop, object[prop]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
});
    
    return sortable[0].join(" ");
    
}
    
var newarr= userInput[0].split(" ");
console.log(find_duplicate_in_array(newarr));
  //end-here
});