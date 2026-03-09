// Select the navigation bar element from the DOM
const nav = document.querySelector("nav");

// Select the globar message bar
const globalMsg = document.querySelector("#global");


window.addEventListener("scroll", () => {

    // if scroll more than 50 px down the page
    if (window.scrollY > 50) {
        nav.classList.add("scrolled"); // unstick nav
    } else {
        nav.classList.remove("scrolled"); // stick back nav
    }

    // if user scroll more than 100 px or more
    if (window.scrollY > 100){
        globalMsg.remove() // remove the global banner
    }
})