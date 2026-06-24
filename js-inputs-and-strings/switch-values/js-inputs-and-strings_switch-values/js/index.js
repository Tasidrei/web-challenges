console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

// assigning the second input to a variable
const secondInput = document.querySelector('[data-js="second-input"]');

// assigning the switch input button to a variable
const switchButton = document.querySelector('[data-js="button-switch"]');

// Uppercase both inputs actions
uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.lowercaseButton();
});

// Lowercase both inputs actions
lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.lowercaseButton();
});

switchButton.addEventListener("click", () => {
  const temp = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value =temp;
});
