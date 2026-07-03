export default function Bookmark({ active, onClick }) {
  const button = document.createElement("button");
  button.classList.add("bookmark");
  if (active) button.classList.add("bookmark--active");
  button.type = "button";
  button.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
    </svg>
  `;
  button.addEventListener("click", onClick);
  return button;
}
