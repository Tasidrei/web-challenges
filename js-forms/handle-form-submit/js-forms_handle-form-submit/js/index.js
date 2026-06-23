console.clear();

/* const form = document.querySelector('[data-js="form"]');
const firstName = document.querySelector ('[data-js= "firstName"]');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(firstName);
});

const firstName = document.querySelector ('[data-js="firstName"]');
firstName.addEventListener("input", (event) => {
    console.log(firstName)
    console.log(event.target.value);
    
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.elements.firstName.focus();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.firstName.reset();
}); */

// selecting the form and the first name input
const form = document.querySelector ('[data-js= (form)]');
const firstName = document.querySelector ('[data-js= (firstName)]');

// handling default evenz form submission
form.addEventListener("submit", (event) => {
    event.preventDefault()
})
// creating a FormData oject from the form source
const formData =new FormData(form);

// converting the FormData to a plain object
const formDataOject = Object.fromEntries(formData);

// logging the object to the console
console.log (formDataOject);
// setting the focus event to the firstName input data
firstName.focus();
// put the form into reset status after submission
form.reset()
// put the firstName into reset mode after submission
firstName.reset()