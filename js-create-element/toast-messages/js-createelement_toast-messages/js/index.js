console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement('li');
  newToastMessage.classList.add ('toast-container__message');
  newToastMessage.textContent = "I'm a toast message.";
  toastContainer.append(newToastMessage)
  console.log(newToastMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  const clearMessage = document.createElement('li');
  clearMessage.classList.remove ('toast-container__message');
  clearMessage.textContent = "I'm a toast message.";
  toastContainer.remove(clearMessage)
  console.log(clearMessage);
});
