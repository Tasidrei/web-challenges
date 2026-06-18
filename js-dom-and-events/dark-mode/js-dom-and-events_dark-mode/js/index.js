console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector ('[data-js="Switch to Dark Mode"]');
const lightModeButton = document.querySelector ('[data-js="Switch to Light Mode"]')
const toggleModeButton = document.querySelector ('[data-js="Toggle Mode"]');

darkModeButton.addEventListener ("click", () => {
    bodyElement.classList.add ("dark");
    console.log ("Switch to Dark Mode");
});

lightModeButton.addEventListener ("click", () => {
    bodyElement.classList.remove ("dark");
    console.log ("Switch to Light Mode");
});

toggleModeButton.addEventListener ("click", () => {
    bodyElement.classList.toggle ("dark");
    console.log ("Toggle Mode");
});
