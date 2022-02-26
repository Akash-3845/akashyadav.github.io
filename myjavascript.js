const humburger = document.querySelector(".humburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const header = document.querySelector(".header");


humburger.addEventListener('click', () => {

navLinks.classList.toggle("open");
header.classList.toggle("open");
humburger.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
});
