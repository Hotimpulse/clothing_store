`use strict`;

// cart page menu

const menuS = document.querySelector(".cart__dropdown");
const burgerS = document.querySelector(".cart__header__icon-set2_burger");
burgerS.addEventListener("mouseover", () => {
    menuS.style.display = "flex";
});

menuS.addEventListener("mouseleave", () => {
    menuS.style.display = "none";
});
