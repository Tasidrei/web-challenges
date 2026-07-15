export default function App() {
  return <Greeting name="Max" />;
}
function Greeting({ name }) {
  const coachNames = ["Max", "Alex", "Patricia"];
  const isCoachName = coachNames.includes(name);
  const greeting = isCoachName ? "Hello Coach!" : "Hello!";
  const displayName = isCoachName ? name : "Guest";
  return <h1>{greeting}, {displayName}!</h1>;
}
