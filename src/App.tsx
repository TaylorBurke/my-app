import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import TableGenerator from './TableGenerator'
// import CardGenerator from "./CardGenerator";
// import {iChingDeck} from './decks/iChing/iChingDeck'
// import {fourDirectionsDeck} from './decks/fourDirections/fourDirectionsDeck'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route exact path='/' component={TableGenerator} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
