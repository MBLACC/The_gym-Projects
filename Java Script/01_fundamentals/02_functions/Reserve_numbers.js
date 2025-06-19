function reverse_number(number){
	return Number(number.toString().split('').reverse().join(''));
}
console.log(reverse_number(12345));
// reversing for the input is a number  