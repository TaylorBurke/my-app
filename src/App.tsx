import React from 'react';
import './App.css';
import CardGenerator from "./CardGenerator";
import {iChingDeck} from './iChingDeck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardGenerator deck={iChingDeck} artist={"Taylor Burke"} />
      </header>
    </div>
  );
}

export default App;
