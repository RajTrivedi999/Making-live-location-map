var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("long",position.coords.longitude);
    x.innerHTML =`<iframe src="https://maps.google.com/maps?q=${localStorage.getItem("lat")}, ${localStorage.getItem("long")}&output=embed"
    width="1000px"
    height="700px"
    frameborder="0"
    style="border:0"
    ></iframe>`
    if(localStorage.getItem("lat") && localStorage.getItem("long")){
        document.querySelectorAll('button')[0].disabled=true;
    }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

function RemoveLocation(){
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
    document.querySelectorAll('button')[0].disabled=false;
    x.innerHTML="";
}