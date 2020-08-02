import React from 'react';
import './App.css';
import CardGenerator from "./CardGenerator";
import {iChingDeck} from './decks/iChing/iChingDeck'
import {fourDirectionsDeck} from './decks/fourDirections/fourDirectionsDeck'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardGenerator deck={iChingDeck} artist={"Zhou yi"} />
        <CardGenerator deck={fourDirectionsDeck} artist={"Twillyb"} />
      </header>
    </div>
  );
}

export default App;
