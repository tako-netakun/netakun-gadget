const menu = document.getElementById("menu");
const menuContent = document.getElementsByClassName("menu-content");
menu.addEventListener("mouseover", (e) => {
    e.preventDefault();
    [...menuContent].map(x => {
        x.classList.add("animated__fadeIn");
        x.classList.remove("animated__fadeOut");
    
        x.style.display = "block";
    });
});
menu.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    [...menuContent].map(x => {
        x.classList.add("animated__fadeOut");
        x.classList.remove("animated__fadeIn")
        x.style.display = "none"
    });
})