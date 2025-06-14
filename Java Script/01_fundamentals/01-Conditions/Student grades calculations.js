let student =[['David',80],['vinoth',77],['divya',88],['Ishitha',95],['Thomas',68]];

var avgmarks=0;

for(let i=0; i<student.length;i++){

    avgmarks += student[i][1];
   
    
}
 let avg = (avgmarks / student.length);
console.log("Average "+(avgmarks / student.length+"\n"));
if(avg < 60){
    console.log(`Grade F: ${avg}`);
}
 else if(avg < 70){
    console.log(`Grade D: ${avg}`);
 }
  else if(avg< 80){
    console.log(`Grade C: ${avg}`);
  }
   else if(avg < 90){
    console.log(`Grade B: ${avg}`);
   }
    else if(avg < 100){
        console.log(`Grade A`);
    }
     else{
        console.log(`Undefinide marks`);
     }