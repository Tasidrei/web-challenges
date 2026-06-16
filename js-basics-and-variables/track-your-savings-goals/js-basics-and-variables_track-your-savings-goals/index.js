console.clear();
/*
Let's build a small program to track your savings goals!

1. Set up three variables:
   - `startingBalance`: Initialize this variable with your initial savings balance. For example, you can set it to 1000.
   - `monthlyContribution`: Set this variable to the amount you plan to save each month.
   - `months`: Specify the number of months over which you want to track your savings. For instance, you can set it to 12 for a year.

2. Calculate the total savings after the specified number of months by using the formula `startingBalance + (monthlyContribution * months)`, and store the result in a variable called `totalSavings`.

3. Print the result to the console to display the total savings you'll have after the specified number of months.

4. Run your JavaScript program to see how much money you'll have saved after the specified time period.
*/

// --v-- write your code here --v--

// 1. Set up input financial variables
const startingBalance = 1000;
const monthlyContribution = 250;
const months = 12;

// 2. Calculate the total future savings balance using the formula
const totalSavings = startingBalance + (monthlyContribution * months);

// 3. Print the result nicely to the console
console.log(`--- Savings Goal Summary ---`);
console.log(`Starting Balance: $${startingBalance}`);
console.log(`Monthly Savings Contribution: $${monthlyContribution}`);
console.log(`Time Horizon: ${months} months`);
console.log(`----------------------------`);
console.log(`Total Projected Savings: $${totalSavings}`);

// --^-- write your code here --^--
