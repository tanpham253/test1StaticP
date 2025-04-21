//geolocation API source: https://www.w3schools.com/html/html5_geolocation.asp, may slow in some browsers
//using innerHTML for id='loc' << should only use in div tag
const loc = document.getElementById("loc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    loc.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  loc.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    " Longitude: " +
    position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}
getLocation();
//datetime function
//inject tags dirrectly
let dateTime = document.getElementById("dateTime");
let date = new Date();
var x;
if (date.getHours()> 12){x='PM'}else {x='AM'}
  dateTime.innerHTML =
    "Date: " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " Time: " +
    date.getHours() +' '+ x;
//slide show module, source: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex1 = 1;
showDivs(slideIndex1);

function plusDivs(n) {
  showDivs(slideIndex1 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
}
//slide auto
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}