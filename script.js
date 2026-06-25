const cards = document.querySelector(".cards");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

console.log(cards);
console.log(next);
console.log(prev);

next.addEventListener("click", () => {
    cards.scrollLeft += 300;
});

prev.addEventListener("click", () => {
    cards.scrollLeft -= 300;
});