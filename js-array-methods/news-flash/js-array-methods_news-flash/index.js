import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter(() => {
  return true;
});
const filteredNews = news.filter((card) => card.categories.includes("politics"));

// Part 2 - start here
const sortedNews = filteredNews;

const sortedNews = filteredNews.toSorted((a, b) => {
  return a.body.length - b.body.length;
});


// Check your filter and sorting order here. Have a look at the console to see if you're right or wrong.
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
