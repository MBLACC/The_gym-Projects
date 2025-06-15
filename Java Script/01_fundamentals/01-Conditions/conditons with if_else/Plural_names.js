function pluralize(str,num){
	if(num != 1 && str != 'sheep' && str != 'geese'){
		return str+''+'s ,number: '+num;
	}
	else{
		return str+' ,'+num;
	}
}
console.log(pluralize('cat',1));