`use strict`;

// products page menu

const menuS = document.querySelector(".products__dropdown");
const burgerS = document.querySelector(".products__header__icon-set2_burger");
burgerS.addEventListener("mouseover", () => {
    menuS.style.display = "flex";
});

menuS.addEventListener("mouseleave", () => {
    menuS.style.display = "none";
});
