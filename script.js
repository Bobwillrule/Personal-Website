const nav = document.querySelector("nav");
const globalMsg = document.querySelector("#global");

const updateChrome = () => {
    if (window.scrollY > 50) {
        nav?.classList.add("scrolled");
    } else {
        nav?.classList.remove("scrolled");
    }

    if (window.scrollY > 100 && globalMsg?.isConnected) {
        globalMsg.remove();
    }
};

window.addEventListener("scroll", updateChrome, { passive: true });
updateChrome();
