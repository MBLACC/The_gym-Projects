//initialization of a variable
const Kelvin=0;
//initialization of celsius
const celsius=Kelvin - 273;
console.log(`Celsius:${celsius}`);
//calculation of fahrenheit
let fahrenheit = celsius *(9/5) +32;
//converting fahrenheit to an integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is :${fahrenheit} degrees Fahrenheit`);
//converting celsius to newton
let newton= celsius * (33/100);
newton=Math.floor(newton)

console.log(`The temperature is :${newton} degrees Newton`);


