const sMediaEl = document.querySelector(".sMedia");
const sMediaTextEl = document.querySelector(".sMedia p");
const listEl = document.querySelector(".list");
const arrowEl = document.querySelector(".arrow");
const liEls = document.querySelectorAll(".list li");

sMediaEl.addEventListener("click", () => {
    listEl.classList.toggle("hide");
    arrowEl.classList.toggle("rotation");
})

liEls.forEach( li => {
    li.addEventListener("click", () => {
        listEl.classList.toggle("hide");
        arrowEl.classList.toggle("rotation");
        sMediaTextEl.innerHTML = li.innerHTML;
    })
});