const crossIcon = document.querySelector('.fa-x');
const welcome = document.querySelector(".welcome");

crossIcon.addEventListener("click", () => {
  welcome.style.display = "none";
})

var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#time");
timeText.innerHTML = currentTime

setInterval(function () {
  document.querySelector("#time").innerHTML = new Date().toLocaleString();
}, 1000);