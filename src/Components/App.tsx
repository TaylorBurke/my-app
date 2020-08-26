import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import TableGenerator from './TableGenerator'
import DeckSelector from "./DeckSelector";
import TemplateManager from "./TemplateManager";


function App() {

    return (
        <div className="App">
                <header className="App-header">
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={TableGenerator}/>
                        <Route path='/ds' component={DeckSelector}/>
                        <Route path='/tm' component={TemplateManager}/>
                    </Switch>
                </header>
        </div>
    );
}


export default App;
