const nav = document.querySelector("nav");
const globalMsg = document.querySelector("#global");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        globalMsg.remove()
    } else {
        nav.classList.remove("scrolled");
    }
})