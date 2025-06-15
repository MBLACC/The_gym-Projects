function assignGrades(num){
	if(num < 60){
		return 'F';
	}
	else if(num>60 && num<70){
		return 'D';
	}
	else if(num >70 && num < 80){
		return 'C';
	}
	else if(num >80 && num <90){
		return 'B'
	}
else{
	return 'A';
}
}
console.log(assignGrades(71));