
 var mixedstr = userInput[0].split("");
 var onlyletters=[];
 var onlynumbers=[];



function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

 for(i=0;i<mixedstr.length;i++){
     
 if(isCharacterALetter(userInput[i]){
	
	onlyletters.push(userInput[i]);
 } else{
	 onlynumbers.push(userInput[i];
 }
    
 }
 
 
 console.log(onlyletters+onlynumbers);