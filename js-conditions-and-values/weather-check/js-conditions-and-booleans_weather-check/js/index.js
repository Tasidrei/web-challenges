// Change this value to test different "weather" conditions.
const weather = "rainy"

switch (weather) {
    case "rainy":
        console.log ("It's raining, don't forget your umbrella!");
        break;
    case "sunny":
        console.log ("It's sunny!");
        break;
    case "snowy":
        console.log ("It's snowing, stay warm!");
        break;
    case "windy":
        break;
        console.log ("It's very windy, wear a thick pullover");
    case "foggy":
        console.log ("Be careful when driving!");
        break;
    case "mixte condition":
        console.log ("I'm not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 
switch (weather) {
  case "sunny":
    if (temperature >= 22) {
      console.log("It's sunny and warm today. Let's go out and have fun!");
    } else {
      console.log("It's sunny, but a bit chilly!");
    }
    break;

  case "rainy":
    if (temperature > 20)  
  console.log("It's warm, but raining. Bring your Umbrella");
    break;

  case "snowy":
    if (temperature < -20) {
      console.log(" It's freezing outside! There's snow everywhere");
    } 
    break;

  case "unknown":
    console.log("I'm not sure what the weather is like.");
    break;
}