//geolocation API source: https://www.w3schools.com/html/html5_geolocation.asp, using innerHTML for id='loc', may slow in some browsers
const x = document.getElementById("loc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    " Longitude: " +
    position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}
getLocation();
