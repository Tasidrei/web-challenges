console.clear();

/*
Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

1. Define two variables:
   - A variable that stores the value of the meal cost.
   - A variable that stores the value of the tip percentage.

2. Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called `tipAmount`.

3. Calculate the total cost of the meal, including tip, by adding `mealCost` and `tipAmount`, and store the result in a variable called `totalCost`.

4. Log a message to the console that includes the meal cost, tip amount, and total cost.
*/

// Step 1: Define variables for meal cost and tip percentage
const mealCost = 50;
const tipPercentage = 15;
// Step 2: Calculate the tip amount
const tipAmount = mealCost * (tipPercentage / 100);
// Step 3: Calculate the total cost of the meal, including tip
const totalCost = mealCost + tipAmount;
// Step 4: Log a message to the console
console.log("--- Meal Bill Summary ---");
console.log("Base Meal Cost: $" + mealCost);
console.log("Tip Amount (" + tipPercentage + "%): $" + tipAmount);
console.log("Total Amount Due: $" + totalCost);