export default function App() {
  return <smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? "😊" : "😢"}
    </div>
  );
}