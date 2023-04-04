let body = document.querySelector(".body")
let button = document.querySelector(".header__button")
let motyw = document.querySelector(".header__button--theme")

button.addEventListener("click", () => {
    body.classList.toggle("body__colorDark");
    if (body.classList.contains("body__colorDark")) {
        motyw.innerText = "Jasny";
    } else {
        motyw.innerText = "Ciemny";
    }
});

