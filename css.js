const h1 = document.querySelector("div.text-center h1");
function clicked() {
  //  h1.innerText = "linked success";
  const colour = h1.style.color;
  if (colour === "blue") {
    newcolor = "tomato";
    console.log(colour);
  } else if (colour === "tomato") {
    newcolor = "black";
    console.log(colour);
  } else {
    newcolor = "blue";
    console.log(colour);
  }
  h1.style.color = newcolor;
}

h1.addEventListener("click", clicked);
