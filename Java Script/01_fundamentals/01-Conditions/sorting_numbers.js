var a = 5;
var b = -1;
var c = 4;

if(a>b && a>c){
 if(b>c){
 	console.log(`A: ${a} B: ${b} C: ${c}`);
 }
  else{
  	console.log(`A: ${a} C: ${c} B: ${b}`);  }
}
else if(b>a && b>c){
	if(a>c){
		console.log(`B: ${b} A: ${a} C:${c} `);
	}
	else{
		console.log(`B: ${b} C: ${c} B: ${b} `);
	}
}
else if(c>a && c>b){
	if(a>b){
		console.log(`C: ${c} A: ${a} B: ${b} `);
	}
	else{
		console.log(`C: ${c} B: ${b} C: ${c}`);
		}
}