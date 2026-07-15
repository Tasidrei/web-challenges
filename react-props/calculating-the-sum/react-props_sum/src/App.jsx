export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={10} />
    </div>
  );
}
function Sum({valueA, valueB}) {
  return <p>{valueA} + {valueB} = {valueA + valueB}</p>;
}