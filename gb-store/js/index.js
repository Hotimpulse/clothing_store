`use strict`;

// main page menu

const menu = document.querySelector(".dropdown");
const burger = document.querySelector(".header__icon-set2_burger");

burger.addEventListener("mouseover", () => {
    menu.style.display = "flex";
});

menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
});