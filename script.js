document.addEventListener("DOMContentLoaded", function () {

  const card = document.querySelector(".card");
  const cardInner = document.querySelector(".card__inner");

  if (!card || !cardInner) {
    return;
  }

  card.addEventListener("click", function () {
    cardInner.classList.toggle("is-flipped");
  });

});
