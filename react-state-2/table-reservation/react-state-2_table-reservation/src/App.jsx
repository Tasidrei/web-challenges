import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  function handleAdd() {
    setPeople(people + 1);
  }

  function handleDelete() {
    setPeople(people - 1);
  } 

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onDelete={handleDelete} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

export default function Counter ({onAdd, onDelete}) {
  return (
    <div>
      <button onClick={onAdd}>+</button>
      <button onClick={onDelete}>-</button>
    </div>
  );
}
/*
function PeopleCounter() {
  const [count, setCount] = useState(2);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Number of People: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

function Counter(handle, handleDelete) {
  return <button onClick={handle}>+</button>;
  return <button onClick={handleDelete}>-</button>;
}
*/
