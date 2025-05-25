//function to change the background color of the body for the coding journey section
function changeBackgroundColor(color) {
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor=  color ;
}
document.getElementById('intro').addEventListener('click', () =>changeBackgroundColor("#2CA02C"));
document.getElementById('react').addEventListener('click', () =>changeBackgroundColor("black"));
document.getElementById('backend').addEventListener('click', () =>changeBackgroundColor("#9467BD"));

//function for generating year automatically
let year= new Date().getFullYear();
//Display the year in the html
document.getElementById("year").textContent=year;
