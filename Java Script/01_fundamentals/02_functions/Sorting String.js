function sorting_string(str){
	let str2=str.split('').sort().join('');
	return str2;
}
console.log(sorting_string("woe"));