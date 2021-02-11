import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './components/go';

function App() {
  return (
    <div className="App">
      tratattatatatat
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Api />
    </div>
  );
}

export default App;
