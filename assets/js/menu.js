const menu = document.getElementById("menu")
const bars = document.querySelector(".fa-bars")
const x = document.querySelector(".fa-x")
const toggleMenu = document.querySelector(".toggleMenu")
const myMenu = document.querySelectorAll(".myMenu")
const modeOpen = document.getElementById("mode-open")
const closer = document.getElementById("closer")

menu.addEventListener("click", () => {
    closer.style.display === "flex" ? closer.style.display = "none" : closer.style.display = "flex";
    toggleMenu.classList.toggle("openMenu")

    modeOpen.classList.toggle("show-icon")
    myMenu.forEach(element => {
        element.classList.toggle("fa-bars");
        element.classList.toggle("fa-x");
    });
})

closer.addEventListener("click", () => {
    toggleMenu.classList.toggle("openMenu")
    closer.style.display === "flex" ? closer.style.display = "none" : closer.style.display = "flex";

    modeOpen.classList.toggle("show-icon")
    myMenu.forEach(element => {
        element.classList.toggle("fa-bars");
        element.classList.toggle("fa-x");
    });
})
