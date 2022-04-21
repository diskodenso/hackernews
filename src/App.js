import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState();
  console.log(articles);
  // fetch the data with useEffect and safe in state
 useEffect(() => {
   axios
      // get the data from the specific endpoint - in this case search by text "vue3"
     .get("https://hn.algolia.com/api/v1/search_by_date?query=vue3&page=10&tags=story")
           // transcript the data you fetching from json into javascript for readability
      .then((response) => setArticles(response.data.hits))
      .catch((err) => console.log(err));
 }, []);
  
  return (
    <div className="App">
      <header>
        <h1>here should be navbar component</h1>
      </header>
      {articles ? articles.map((article) => (
            <div key={article.objectID}>
              <h2>{article.title}</h2>
              <p>{article.author}</p>
            </div>
          ))
        : "Loading....."}
    </div>
  );
}

export default App;
