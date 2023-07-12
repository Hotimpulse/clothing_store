`use strict`;

// catalog page menu

const menu3 = document.querySelector(".catalog__dropdown");
const burger3 = document.querySelector(".catalog__header__icon-set2_burger");
burger3.addEventListener("mouseover", () => {
    menu3.style.display = "flex";
});

menu3.addEventListener("mouseleave", () => {
    menu3.style.display = "none";
});
