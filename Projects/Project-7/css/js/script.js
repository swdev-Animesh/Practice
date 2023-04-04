"use strict";
const menu_btn = document.getElementById("menu_btn");
let showMenu = false;
console.log(menu_btn);
menu_btn.addEventListener("click", toggleMenu);
const navbar = document.getElementById("navbar-nav");
function toggleMenu() {
  if (!showMenu) {
    menu_btn.classList.add("open");
    navbar.classList.add("menu_flex");
    showMenu = true;
  } else {
    menu_btn.classList.remove("open");
    showMenu = false;
  }
}
