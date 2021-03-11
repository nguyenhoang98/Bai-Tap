document.getElementById("action").onclick = function () {
  //   this.innerHTML = "&times;";
  document
    .getElementsByClassName("menu__link")[0]
    .classList.toggle("show__menu__mobile");
  document
    .getElementsByClassName("menu")[0]
    .classList.toggle("menu__height__auto");
};
var control = document.getElementsByClassName("control-panel")[0];
document.getElementById("filter").onclick = function () {
  if (control.style.display == "grid") {
    document.getElementsByClassName("control-panel")[0].style.display = "none";
  } else {
    document.getElementsByClassName("control-panel")[0].style.display = "grid";
  }
};
window.onresize = function () {
  if (screen.width >= 1280) {
    document.getElementsByClassName("control-panel")[0].style.display = "grid";
  }
};
