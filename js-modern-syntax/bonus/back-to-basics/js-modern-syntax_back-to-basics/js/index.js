/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// Task 1
export const getNameAndCountry = ({ name, country }) => [name, country];

// Old way of writing the function without destructuring, default parameters, and spread operator
export function getNameAndCountry(person) {
  return [person.name, person.country];
}

// Task 2
export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};

// Old way of writing the function without destructuring, default parameters, and spread operator
export function getRelocatedCity(city1, city2) {
  // Default parameter replacement
  if (!city2) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  // Replace destructuring
  const nameAndCountry = getNameAndCountry(city2);
  const country = nameAndCountry[1];

  // Replace spread operator
  const relocatedCity = {};
  for (const key in city1) {
    relocatedCity[key] = city1[key];
  }

  relocatedCity.country = country;

  return relocatedCity;
}
