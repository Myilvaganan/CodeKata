var lbh= userInput[0].split("");


var str=[];


for(i=0;i<lbh.length;i++){
    if(lbh[i] === lbh[i+1])
    
    {
        str.push(lbh[i]);
    }
    
    
}
 
 if(str.length){
     console.log("yes");
 }
else{
    console.log("no");
}

