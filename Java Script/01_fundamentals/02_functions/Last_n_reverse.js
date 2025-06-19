function lastnreverse(text,n){
	return text.slice(-n).split('').reverse().join('');
}
console.log(lastnreverse('hello',2));