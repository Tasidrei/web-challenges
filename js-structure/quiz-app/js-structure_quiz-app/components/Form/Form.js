import handleFormSubmit from "../utils/handleFormSubmit.js";

export default function Form() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = `
    <label for="question">Your question:</label>
    <textarea id="question" name="question" maxlength="150"></textarea>
    <span class="form__character-count"><span data-js="amount-left-question"></span> characters left</span>
    <label for="answer">Your answer:</label>
    <textarea id="answer" name="answer" maxlength="150"></textarea>
    <span class="form__character-count"><span data-js="amount-left-answer"></span> characters left</span>
    <label for="tags">Tags:</label>
    <input id="tags" type="text" name="tags" />
    <button class="form__submit-button" type="submit">Submit</button>
  `;

  form.addEventListener("submit", handleFormSubmit);
  return form;
}
