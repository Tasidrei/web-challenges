import "./styles.css";
import Counter from "./components/Counter";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function ColoredNumber({ value }) {
  const [count, setCount] = useState(value);
}

    function handleIncrement() {
      setCount(count + 1);
    }

    function handleDecrement() {
      setCount(count - 1);
    }

    return (
    <div>
      <ColoredNumber value={count} />
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
