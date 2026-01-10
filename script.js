const nav = document.querySelector("nav");
const globalMsg = document.querySelector("#global");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    if (window.scrollY > 100){
        globalMsg.remove()
    }
})