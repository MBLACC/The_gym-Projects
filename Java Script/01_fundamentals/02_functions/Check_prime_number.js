function prime_number(num){
if(num %1 === 0){
	return false;
}
else if(num % 2 ===0 ){
	return true;
}
else {
for (let i=2;i<num;i++){
	if(num % i === 0){
		return false;
	}
}
return true;
}
}
console.log(prime_number(2));