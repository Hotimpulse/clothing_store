`use strict`;

// cart page menu

const menu4 = document.querySelector(".cart__dropdown");
const burger4 = document.querySelector(".cart__header__icon-set2_burger");
burger4.addEventListener("mouseover", () => {
    menu4.style.display = "flex";
});

menu4.addEventListener("mouseleave", () => {
    menu4.style.display = "none";
});
