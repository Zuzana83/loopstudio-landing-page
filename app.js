const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navMenuWrapper = document.querySelector(".nav-menu-wrapper");

openBtn.addEventListener("click", () => {
    navMenuWrapper.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    navMenuWrapper.classList.remove("open");
})


