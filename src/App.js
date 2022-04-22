import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

function App() {
  const [articles, setArticles] = useState();
  console.log(articles);
  const [queries, setQueries] = useState('');

  const handleChange = (event) => {
	  console.log(event.target.value);
	  return 
  }
  

  // fetch the data with useEffect and safe in state
	useEffect(() => {
		axios
			// get the data from the specific endpoint - in this case search by text "vue3"
			.get(
				`https://hn.algolia.com/api/v1/search_by_date?query=${queries}&page=10&tags=story`
			)
			// transcript the data you fetching from json into javascript for readability
			.then((response) => setArticles(response.data.hints))
			.catch((err) => console.log(err));
  }, []);
  
	// return jsx!!! with tenary operators
  return (
    <div className="App">
      <SearchBar handleChange={handleChange}/>
    
			{articles
				? articles.map((article) => (
						<div key={article.objectID}>
							<h2>{article.title}</h2>
							<p>{article.author}</p>
						</div>
				  ))
				: 'Loading.....'}
		</div>
	);
}

export default App;
