export default function App() {
  return <button colour="red" disabled={false} text="Click me" />;
}

function Button({ colour, disabled, text }) {

  return (

  <button 
  style={{ backgroundColor: colour, height: "100px" }} 
  disabled={disabled}  
  >
  {text} </button>
  );
  
}