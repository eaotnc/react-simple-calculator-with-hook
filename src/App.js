import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       calcucalor
       <div className="calculator">
         <input className="output" type="number"/>
        <div className="numpad">
          <button className="button">9</button>
          <button className="button">8</button>
          <button className="button">7</button>
          <button className="button">6</button>
          <button className="button">5</button>
          <button className="button">4</button>
          <button className="button">3</button>
          <button className="button">2</button>
          <button className="button">1</button>
          <button className="button">0</button>
          <button className="button">.</button>
        </div>
        <div className="operator">
          <button className="button">+</button>
          <button className="button">-</button>
          <button className="button">X</button>
          <button className="button">/</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
