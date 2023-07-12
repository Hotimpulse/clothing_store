`use strict`;

// registration page menu

const menuS = document.querySelector(".register__dropdown");
const burgerS = document.querySelector(".register__header__icon-set2_burger");
burgerS.addEventListener("mouseover", () => {
    menuS.style.display = "flex";
});

menuS.addEventListener("mouseleave", () => {
    menuS.style.display = "none";
});
