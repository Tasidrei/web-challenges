import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button color="#ff6b6b"><span>🔥</span>Click with emotion</Button>
      <Button color="#ff4757"><span>❌</span><strong>Don't click</strong> me</Button>
      <Button color="#ffa502"><span>⚠️</span>Avoid clicking</Button>
      <Button color="#2ed573"><span>✅</span>Last button</Button>
    </main>
  );
}

function Button({children, color}) {
  return (
    <button className="button" type="button" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}
