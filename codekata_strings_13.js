

 //var word= userInput[0].toLowerCase().split(" ");
var word1 = prompt("Enter the sentence: ");
var word = word1.toLowerCase().split(" ");
var emptystr="";


//var word = userInput[0].toLowerCase().split(" ");
//var emptystr="";


if (word.includes("the") || word.includes("an") || word.includes("a"))
{

for (var i=0;i<word.length;i++){
   
if (word[i]==="the" || word[i] ==="an" || word[i] ==="a")
{
    emptystr = emptystr + word[i+1] +" ";
}else{
    continue;
}
}

console.log(emptystr.trim());
} else {
    console.log("-1");
}