console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
let receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let totalCost = 0;
if (numberOfHotdogs < 5) {
    totalCost = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
    totalCost = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
    totalCost = numberOfHotdogs * 1;
} else if (numberOfHotdogs === 10000000) {
    totalCost = numberOfHotdogs * 0.10;
} else {
    totalCost = numberOfHotdogs * 0.5; // fallback rate
}
console.log("Total price to pay: " + totalCost + " euro");

// Part 4: Daytime
const currentHour = 12;
let statement = "";
if (currentHour < 17) {
    statement = "Still need to learn";
} else if (currentHour >= 17) {
    statement = "Party Time !!!";
}
console.log(statement);

// Part 5: Greeting
const userName = "Archibald"; 
const coachName = "Alex"; 
const greeting = "Hello " + (userName === coachName ? "Coach" : userName) + "!";

console.log(greeting);
