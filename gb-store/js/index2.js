// products page menu

const menuS = document.querySelector(".products__dropdown");
const burgerS = document.querySelector(".products__burger-icon");
burgerS.addEventListener("mouseover", () => {
    menuS.style.display = "flex";
});

menuS.addEventListener("mouseleave", () => {
    menuS.style.display = "none";
});
