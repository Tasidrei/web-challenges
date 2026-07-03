import Bookmark from "./Bookmark.js";

export default function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
    <h2 class="card__question">${props.question}</h2>
    <button class="card__button-answer" type="button">Show answer</button>
    <p class="card__answer">${props.answer}</p>
    <ul class="card__tag-list"></ul>
    <div class="card__button-bookmark"></div>
  `;

  const tags = card.querySelector(".card__tag-list");
  props.tags.forEach(tag => {
    const li = document.createElement("li");
    li.classList.add("card__tag-list-item");
    li.textContent = "#" + tag;
    tags.append(li);
  });

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: () => card.classList.toggle("bookmark--active")
  });
  card.querySelector(".card__button-bookmark").append(bookmarkButton);

  card.querySelector(".card__button-answer").addEventListener("click", () => {
    card.querySelector(".card__answer").classList.toggle("card__answer--active");
  });

  return card;
}
