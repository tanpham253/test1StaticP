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
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}