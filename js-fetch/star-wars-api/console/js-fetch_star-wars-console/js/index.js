console.clear();

const url = "https://swapi.py4e.com/api/people";

function fetchData() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // 1. Log the entire data object
      console.log("Full data object:", data);

      // 2. Log the 'results' array (the actual list of characters)
      console.log("Results array:", data.results);

      // 3. Log the first character (Luke Skywalker)
      console.log("First character:", data.results[0]);

      // 4. Log a specific value (Luke's height)
      console.log("Luke's height:", data.results[0].height);

      // 5. BONUS: Log R2‑D2’s eye color
      const r2 = data.results.find(person => person.name === "R2-D2");
      console.log("R2-D2 eye color:", r2.eye_color);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

fetchData();
