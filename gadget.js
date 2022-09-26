const menu = document.getElementById("menu");
const menuContent = document.getElementsByClassName("menu-content");
menu.addEventListener("mouseover", (e) => {
    e.preventDefault();
    [...menuContent].map(x => x.style.display = "block")
});