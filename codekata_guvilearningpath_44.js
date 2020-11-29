/*{}(())[][][{}]
You are given a string of different type of brackets. Your task is to check whether the given string is balanced or not balanced.
A string is said to be balanced if the number of opening brackets are equal to the number of closing brackets where the brackets should be of same kind.

Input Description:
You are given a string ‘s’.

Output Description:
Print 'yes' if the given string is balanced and no if it is not

Sample Input :
{}(())[][][{}]
Sample Output :
yes*/

let matchingParenthesis = function(paren){
    
    let arr= [];
    
    //creating an object with mathcing values
    
    let map= {
        '(':')',
        '[':']',
        '{':'}'
     }
    
   for(i=0;i<paren.length;i++){
       
      // If character is an opening brace adding to arr
        if (paren[i] === '(' || paren[i] === '{' || paren[i] === '[' ) {
            arr.push(paren[i]);
        }  else {
            
         let removeLast = arr.pop();   
            
        if(paren[i] !== map[removeLast]){return "no"}
        
        }
            
         

       
   } 
    
    if (arr.length !== 0){return "no"}
    
    
    return "yes";
    
};

var paren= userInput[0].split("");

console.log(matchingParenthesis(paren));



