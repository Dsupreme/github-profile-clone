import React from 'react';
import logo from './logo.svg';

import { Content } from './features/content/Content';

import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <span>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        <a href="/">Pull Requests</a>
        <a href="/">Issues</a>
        <a href="/">Marketplace</a>
      </nav>

      <div className="container">
        <Content />
      </div>
    </div>
  );
}

export default App;
