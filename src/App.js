import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {
  const [articles, setArticles] = useState();
  // create a state for search input
  const [query, setQuery] = useState('vue3');
  // fetch the data with useEffect and safe in state
  

 useEffect(() => {
   axios
      // get the data from the specific endpoint - in this case search by text "vue3"
     .get("https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=10&tags=story")
           // transcript the data you fetching from json into javascript for readability
      .then((response) => setArticles(response.data.hits))
      .catch((err) => console.log(err));
 }, []);
  
  return (
    <div className="App">
      <SearchBar />
    
			{articles
				? articles.map((article) => (
          <div key={article.objectID}>
						<p>{article.title}</p>
            <p>{article.author}</p>
            <p>{article.num_comments}</p>
            <p>{article.created_at}</p>
            </div>
				  ))
				: 'Loading...'}
      </div>
	);
}

export default App;
