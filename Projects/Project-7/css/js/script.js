"use strict";
const menu_btn = document.getElementById("menu_btn");
let showMenu = false;
console.log(menu_btn);
menu_btn.addEventListener("click", toggleMenu);
const navbar = document.getElementById("navbar-nav");
const body = document.getElementById("full");
console.log(body);
function toggleMenu() {
  if (!showMenu) {
    menu_btn.classList.add("open");
    navbar.classList.remove("trans");
    navbar.classList.add("menu_flex");
    navbar.classList.add("blur");
    showMenu = true;
  } else {
    navbar.classList.remove("blur");
    menu_btn.classList.remove("open");
    navbar.classList.add("trans");
    navbar.classList.remove("menu_flex");
    showMenu = false;
  }
}
