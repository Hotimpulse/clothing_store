`use strict`;

// catalog page menu

const menuS = document.querySelector(".catalog__dropdown");
const burgerS = document.querySelector(".catalog__burger-icon");
burgerS.addEventListener("mouseover", () => {
    menuS.style.display = "flex";
});

menuS.addEventListener("mouseleave", () => {
    menuS.style.display = "none";
});
