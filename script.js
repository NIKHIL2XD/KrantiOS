

var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#time");
timeText.innerHTML = currentTime

setInterval(function () {
  document.querySelector("#time").innerHTML = new Date().toLocaleString();
}, 1000);

const crossIcon = document.querySelector('.fa-x');
const welcome = document.querySelector(".welcome");

crossIcon.addEventListener("click", () => {
  welcome.style.display = "none";
})

dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const dockItems = document.querySelectorAll('.dock-item');

dockItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    dockItems.forEach(i => i.style.transform = 'scale(1)');
    item.style.transform = 'scale(1.5)';
    item.previousElementSibling?.style.transform = 'scale(1.3)';
    item.nextElementSibling?.style.transform = 'scale(1.3)';
  });

  item.addEventListener('mouseout', () => {
    dockItems.forEach(i => i.style.transform = 'scale(1)');
  });
});