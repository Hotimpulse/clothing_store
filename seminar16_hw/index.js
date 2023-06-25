const menu = document.querySelector(".dropdown");
const burger = document.querySelector(".burger-icon");

burger.addEventListener("mouseover", () => {
    menu.style.display = "flex";
});

menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
});