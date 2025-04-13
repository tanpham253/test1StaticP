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

  dateTime.innerHTML =
    "Date: " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " Time: " +
    date.getHours();