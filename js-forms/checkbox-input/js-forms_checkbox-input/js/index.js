console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
// hide error initially before it is displayed

hideTosError();

// use event listner and the change event on the checkbox

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

  // --^-- write your code here --^--

// if checkbox not checked, show error and stop the submission action
if (!tosCheckbox.checked) {
  showTosError();
  return;
}
  // --^-- write your code here --^--
  // if checkbox is checked, show success and hide the error message
hideTosError();

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
