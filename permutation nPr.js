
// INPUT
// 5 2
// OUTPUT
// 20
var lbh= userInput[0].split(" ");
var l= parseInt(lbh[0]), k= parseInt(lbh[1]);

var n= 1, r=1;

for(i=1;i<=l;i++){
    n *= i;
}
for(j=1;j<=k;j++){
    r *= j;
}


var c= l-k;
var d=1;
for(z=1;z<=c;z++){
    d *= z;
}


var e= ( n/d);


  console.log(e);