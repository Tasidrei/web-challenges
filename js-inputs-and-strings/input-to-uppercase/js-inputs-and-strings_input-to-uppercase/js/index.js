console.clear();

const firstInput = document.querySelector ('[data-js="first-input"]');
const secondInput = document.querySelector ('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowewrCaseButton = document.querySelector('[data-js="button-lowercase"]');


uppercaseButton.addEventListener ('click', () => {
    firstInput.value = firstInput.value.toUpperCase();
    secondInput.value = secondInput.value.toUpperCase();
})

lowewrCaseButton.addEventListener ('click', () => {
    firstInput.value = firstInput.value.lowewrCaseButton();
    secondInput.value = secondInput.value.lowewrCaseButton ();
})