function handleScroll() {
    const as = [...document.querySelectorAll(".toc a")].reverse();
    const toc = document.querySelector(".toc");
    const scrollable = toc.scrollHeight > toc.clientHeight;
    let done = false;
    for (const a of as) {
        a.className = "";
        if (!done) {
            const header = document.getElementById(a.href.split("#")[1]);
            if (!header) continue;
            const top = header.getBoundingClientRect().top;
            if (top < window.innerHeight / 4) {
                a.className = "current";
                if (scrollable) {
                    a.scrollIntoView({ block: "center" });
                }
                done = true;
            }
        }
    }
    document.querySelector(".toc-title>a").className = done ? "" : "current";
}

function lget(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function lset(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) { }
}

const prefersDark = () =>
    window.matchMedia?.matchMedia("(prefers-color-scheme: dark)").matches;

function setDark(dark) {
    lset("theme", dark ? "dark" : "light");
    document.body.parentElement.className = dark ? "" : "light";
}

const getTheme = () => lget("theme") ?? (prefersDark ? "dark" : "light");

window.addEventListener("DOMContentLoaded", () => {
    setDark(getTheme() === "dark");
    document.querySelector(".theme-button")?.addEventListener("click", () => {
        setDark(document.body.parentElement.className === "light");
    });
});

window.addEventListener("scroll", handleScroll);
handleScroll();
