import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My Article</h2>
      <label htmlFor="article-content">Article Content:</label>
      <input id="article-content" type="text" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Wikipedia"
      >
        Wikipedia
      </a>
      <p>This is the content of my article.</p>
    </article>
  );
}
