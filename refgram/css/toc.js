function handleScroll() {
    const as = [...document.querySelectorAll(".toc a")].reverse();
    const toc = document.querySelector(".toc");
    const scrollable = toc.scrollHeight > toc.clientHeight;
    let done = false;
    for (const a of as) {
        a.style.color = "";
        if (!done) {
            const header = document.getElementById(a.href.split("#")[1]);
            if (!header) continue;
            const top = header.getBoundingClientRect().top;
            if (top < window.innerHeight / 5) {
                a.style.color = "inherit";
                if (scrollable) {
                    a.scrollIntoView({ block: "center" });
                }
                done = true;
            }
        }
    }
    document.querySelector(".toc-title>a").style.color = done ? "" : "inherit";
}

window.addEventListener("scroll", handleScroll);
handleScroll();
