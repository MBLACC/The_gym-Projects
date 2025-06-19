function Waiting_month(first_month,second_month){
	let diff = (second_month - first_month + 12) % 12;
	return diff;
}
console.log(Waiting_month(10,14));