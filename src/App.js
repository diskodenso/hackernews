import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Home from './views/Home';


function App() {

  return (
    <div className="App">
      <SearchBar />
      <Home/>
      </div>
  );
}

export default App;
