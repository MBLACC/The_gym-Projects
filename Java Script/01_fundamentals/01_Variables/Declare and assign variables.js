
let shuttle_speed = 17500;
let distance_to_mars = 225000000;
let distance_to_moon = 384400;
let miles_per_kilometer = 0.621;
console.log(typeof shuttle_speed);
console.log(typeof distance_to_mars);
console.log(typeof distance_to_moon)
console.log(typeof miles_per_kilometer);
let mile_to_mars = distance_to_mars * miles_per_kilometer;
let hours_to_mars = mile_to_mars /shuttle_speed;
let days_to_mars = hours_to_mars/24;
let shuttle_name = 'determination';
console.log(`${shuttle_name} will take ${distance_to_mars} days to reach Mars`);
console.log(``)
