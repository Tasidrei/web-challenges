export default function App() {
  return <smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <p>The individual is smiling happily!</p>
      ) : (
        <p>The individual looks sad and disappointed!</p>
      )}
    </div>
  );
};