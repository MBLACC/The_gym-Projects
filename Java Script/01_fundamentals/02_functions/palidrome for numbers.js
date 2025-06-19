function palidrome_for_numbers(numbers){
if(Number(numbers.toString().split('').reverse().join('')) != numbers){
	return `This is the number is not a palidrome : ${numbers}`;
}
else{
	return `This is the number is palidrome: ${numbers}`;
}
}
console.log(palidrome_for_numbers(121));