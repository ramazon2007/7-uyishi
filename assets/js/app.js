const btnActive = document.querySelector(".box");
const btnClose = document.querySelector(".big");
const sidebar = document.querySelector(".container");


btnActive.addEventListener("click", () => {
  btnClose.style.display = "block";
  btnActive.style.display = "none";
});

btnClose.addEventListener("click", () => {
  btnClose.style.display = "none";
  btnActive.style.display = "block";

})

document.getElementById("button2").addEventListener("click", () => {
  document.body.style.background = "black"
})
document.getElementById("button").addEventListener("click", () => {
  document.body.style.background = "white"
})

