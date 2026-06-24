// Task 1: Copy

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

// --v-- Write your code here --v--
// Copy button to first and second button
copyButton.addEventListener("click", () => {
  secondCopyInput.value = firstCopyInput.value;
});
// --^-- End of Task 1 --^--

// Task 2: Copy and Uppercase

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

// --v-- Write your code here --v--
// Copy upper case to both first and second copy input
copyInUppercaseButton.addEventListener("click", () => {
  secondCopyInUppercaseInput.value = firstCopyInUppercaseInput.value.toUpperCase();
})
// --^-- End of Task 2 --^--

// Task 3: Switch Values

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);

// --v-- Write your code here --v--
switchValueButton.addEventListener("click", () => {
  /*firstSwitchValueInput.value = secondSwitchValueInput.value.toUpperCase();
  firstSwitchValueInput.value = secondSwitchValueInput.value.toLowerCase();
  secondSwitchValueInput.value = firstSwitchValueInput.value.toUpperCase();
  secondSwitchValueInput.value = firstSwitchValueInput.value.toLowerCase(); */

  // Correct approach by assigning a temp variable & shrot form
  const temp = firstSwitchValueInput.value;
  firstSwitchValueInput.value = secondSwitchValueInput.value;
  secondSwitchValueInput.value = temp;
})
// --^-- End of Task 3 --^--
