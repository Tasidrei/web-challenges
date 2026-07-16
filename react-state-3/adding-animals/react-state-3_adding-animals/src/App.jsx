import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import uid from "uid";

const initialAnimals = [
  {
    id: uid(),
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: uid(),
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: uid(),
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
  setAnimals([...animals, { id: uid(), ...newAnimal }]);
}

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}

