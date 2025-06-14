var a= -5;
var b= -2;
var c= -6;
var d=  -10;
var e= -1;

if(a>b && a>c && a>d && a>e){
	console.log(`A: ${a}`);
}
else if(b>a && b>c && b>d && b>e){
	console.log(`B: ${b}`);
}
else if(c>a && c>b && c>d && c>e){
	console.log(`C: ${c}`);
}
else if(d>a && d>b && d>c && d>e){
	console.log(`D: ${d}`);
}
else{
	console.log(`E: ${e}`);
}