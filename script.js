const card = document.querySelector(".card");

card.addEventListener("click", () => {
  const inner = card.querySelector(".card__inner");

  inner.classList.toggle("is-flipped");
});
