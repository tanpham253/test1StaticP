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
/*
//slide show module, source: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";  
}
//slide show module, source: https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}
*/
// Reusable slideshow module
function initSlideshow(slideshowClass) {
  let slideIndex = 1;

  function showSlides(n) {
    const slides = document.getElementsByClassName(slideshowClass);
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Initial display
  showSlides(slideIndex);

  // Return controls to navigate slides
  return {
    next: () => plusSlides(1),
    prev: () => plusSlides(-1)
  };
}

// Initialize slideshows
const slideshow1 = initSlideshow("mySlides1");
const slideshow2 = initSlideshow("mySlides2");
const slideshow3 = initSlideshow("mySlides3");
const slideshow4 = initSlideshow("mySlides4");
const slideshow5 = initSlideshow("mySlides5");
const slideshow6 = initSlideshow("mySlides6");
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