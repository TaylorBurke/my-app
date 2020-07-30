import React from 'react';
import './App.css';
import CardGenerator from "./CardGenerator";
import {iChingDeck} from './decks/iChing/iChingDeck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardGenerator deck={iChingDeck} artist={"Zhou yi"} />
      </header>
    </div>
  );
}

export default App;
