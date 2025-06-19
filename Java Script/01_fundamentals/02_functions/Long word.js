function long_word (str){
let str2=str.split(' ');
let longest='';
for(let i=0; i<str2.length;i++){
	if(str2[1].length > longest.length ){
	  longest = str2[i];
	}
}

return longest;
}
console.log(long_word('welcome home'));