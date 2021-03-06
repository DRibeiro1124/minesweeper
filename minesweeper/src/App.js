import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Minesweeper from './Minesweeper';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minesweeper</h1>
        </header>
        
        <Minesweeper />
      </div>
    );
  }
}

export default App;
