import Header from "./Header.js";
import Form from "./Form.js";
import CardList from "./CardList.js";

export default function App() {
  const main = document.createElement("main");
  main.classList.add("app");
  main.append(Header(), Form(), CardList());
  return main;
}
