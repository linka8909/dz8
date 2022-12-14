// let hamburger = document.getElementById("hamburger");
// hamburger.addEventListener("click", showHamburger);
// function showHamburger () {
//   let mobileMenu = document.getElementById("mobile-menu");
//   mobileMenu.classList.toggle("mobile-menu-animation");

// }
let array = document.getElementById("so")

array.classList.add("s");

array.addEventListener("click", colorChanger);

let arr = 0;

function colorChanger () {
  if(arr % 2 == 0) {
    so.style.color = "purple";
  } else {
    so.style.color = "black";
  }
  arr++
}