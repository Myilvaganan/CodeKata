// You are given a string ‘s’.Print all the duplicate characters of string.

// Input Description:
// String ‘s; is given

// Output Description:
// Print only duplicate character and -1 if no character is duplicate.

// Sample Input :
// abcddee
// Sample Output :
// d e
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

 function find_duplicate_in_array(arra1) {
        var object = {};
        var result = "";

        arra1.forEach(function (item) {
          if(!object[item])
              object[item] = 0;
            object[item] += 1;
        });

        for (var prop in object) {
           if(object[prop] >= 2) {
               result= result+prop+" ";
           }
        }
        
      if(result.length !== 0){
         console.log(result.trim());
      }else{
          console.log("-1");
      }
    }
var newarr= userInput[0].split("");
find_duplicate_in_array(newarr);

  //end-here
});