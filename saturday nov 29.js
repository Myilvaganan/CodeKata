

var len= userInput[0];

var arr=[];


for(i=1;i<=len;i++){

    for(j=1;j<1+i;j++){
     arr = arr.concat("1")
    }
    

console.log(arr.join(" ")) ; 

    
 arr=[];
}



var n=3;

var obj={
	
	a: 1,
	b: 2,
c: 3}

if( n in obj)
{
	console.log("true");
	
	console.log(obj);
	
}else{console.log("false");}
	