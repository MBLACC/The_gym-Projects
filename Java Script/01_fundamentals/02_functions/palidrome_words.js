function palidrome (str){
	if(str.split('').reverse().join('') !=str){
		return `This is not a padrome word: ${str}`;
	}
	else{
		return `This is a pandrome word :${str}`;
	}
}
console.log(palidrome("madam"));