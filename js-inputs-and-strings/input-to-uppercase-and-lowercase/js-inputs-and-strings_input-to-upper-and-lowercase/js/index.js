console.clear();
// Uppercase logic first input - first button
const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

// Lowercase logic second input - second button
const secondInput = document.querySelector('[data-js="second-input"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

lowercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toLowercase();
});
