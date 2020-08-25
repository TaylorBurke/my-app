import React from "react";
import { fourDirectionsDeck } from '../decks/fourDirections/fourDirectionsDeck';
import { iChingDeck } from '../decks/iChing/iChingDeck';
import {Deck} from "../interface/Deck/Deck";

export const MyContext = React.createContext<ContextType>({state:
        {
            allDecks: [fourDirectionsDeck, iChingDeck],
            selectedDecks: []
        }});

type ContextType = {
    state: myState;
}

type myState = {
    allDecks: Deck[];
    selectedDecks: Deck[];
}

class MyProvider extends React.Component {
    state = {
        allDecks: [],
        selectedDecks: [],
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;