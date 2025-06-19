function typeof_ (anything){
	return typeof anything;
}
console.log(typeof_(123));
console.log(typeof_("woe"));
console.log(typeof_(true));
console.log(typeof_({}));
console.log(typeof_(function(){}));
console.log(typeof_(undefined));