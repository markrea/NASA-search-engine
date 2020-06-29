import React, { useState } from 'react';
import '../styles/App.css';
import Search from "./Search";
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://www.gazettenet.com/getattachment/1914d482-e47e-4202-809d-fb0c7d5828ba/b6-nasa-logo-biz-072219-ph2"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      <div className="search-results">
        {searchResults && searchResults.length > 0 && (searchResults.map((element) => <SearchResults key={element} image={element} />))}
      </div>
    </div>

  );

}

export default App;
