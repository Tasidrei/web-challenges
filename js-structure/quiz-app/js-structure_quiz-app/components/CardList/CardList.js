import Card from "./Card.js";
import cards from "../data/cards.js";

export default function CardList() {
  const section = document.createElement("section");
  section.classList.add("card-list");
  cards.forEach(card => section.append(Card(card)));
  return section;
}
