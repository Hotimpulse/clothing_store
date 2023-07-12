`use strict`;

// registration page menu

const menu5 = document.querySelector(".register__dropdown");
const burger5 = document.querySelector(".register__header__icon-set2_burger");
burger5.addEventListener("mouseover", () => {
    menu5.style.display = "flex";
});

menu5.addEventListener("mouseleave", () => {
    menu5.style.display = "none";
});
