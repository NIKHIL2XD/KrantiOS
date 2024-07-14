const crossIcon = document.querySelector('.fa-x');
const welcome = document.querySelector(".welcome");

crossIcon.addEventListener("click", () => {
  welcome.style.display = "none";
})
