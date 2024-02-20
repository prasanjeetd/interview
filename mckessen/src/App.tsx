import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchResult, Service } from './BingAPI';




function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    try {

      if (!searchTerm) return;

      console.log("Button clicked");

      const r = await Service(searchTerm);

      console.log(r);
      setSearchResults(r);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="text"
          value={searchTerm}
          maxLength={50}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id} ><a className='list' href={result.url}> {result.name}</a></li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



/*
Create a ReactJS application that leverages the Bing search API.
• Must take a search input and display a list of results.

Keep your code and solutions as simple as possible.
• You can use bootstrap with create-react-app or build it from scratch. You will be asked why you used the solution you chose later in the selection process.
• Try to use input validation. You will be asked whether you use it or not later during further interviews.
• Our team will do a Code review (code style, organization, naming conventions, declarations, commenting). Keep this in mind when writing code.
• Try to implement source control. Our team will review commit messages.
• Our team will review your UI Styling.
• Try to use typescript as much as possible.
• Try to use any dependency libraries. You will be asked whether you use it or not later during further interviews.
• Include, if possible, any extras you consider valuable to your solution: UI Tests, Deploy your solution to Azure, etc.
• The goal is to check whether you can code up or not an API-driven application.
• In a later technical interview, you might be asked how you can enhance/improve your solution via screen share. Areas of improvement include UI, build time, bundle size, adding a new feature, etc.
 Keep this in mind for the technical interview.

*/


