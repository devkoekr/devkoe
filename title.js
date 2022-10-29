const title = document.querySelector(".titlesample");
function titleclick() {
  title.style.color = "blue";
}
function mouseenter() {
  title.innerText = "mouse enter";
}
function mouseleave() {
  title.innerText = "mouse leave";
}
function copy(){
  alert("copied!");
}
title.addEventListener("click", titleclick);
title.addEventListener("mouseenter", mouseenter);
title.addEventListener("mouseleave", mouseleave);
window.addEventListener("copy", copy);
