import React from 'react';
import {AppState} from "../interface/AppState";
import {RootState} from "../interface/RootState";
import {connect} from "react-redux";
import {getTableState} from "../redux/tableReducer";
import {Action} from "redux";
import {Deck} from "../interface/Deck/Deck";
import {deselectDeck, selectDeck} from "../interface/Actions/ActionCreators";

type DeckSelectorProps = {
    allDecks: Deck[],
    selectedDecks: Deck[],
    selectDeck: any,
    deselectDeck: any,
}

const DeckSelector = ({allDecks, selectedDecks, selectDeck, deselectDeck} : DeckSelectorProps) => {

    const handleChange = (deck: Deck) : void => {
        if (selectedDecks.filter(d => d.name === deck.name).length > 0){
            deselectDeck(deck);
        } else {
            selectDeck(deck);
        }
    }

    return (
        <div>
            {allDecks.map((d)=> {
                return (
                    <div>
                        <input
                            checked = {selectedDecks.filter(deck => deck.name === d.name).length > 0}
                            onClick={() => handleChange(d)} type={"checkbox"} name={d.name}/>
                        {d.name}
                    </div>
                )
            } )}
        </div>
    )
}

interface ConnectedDispatch {
    selectDeck: (d: Deck) => Action;
    deselectDeck: (d: Deck) => Action;
}

function mapStateToProps(state : RootState) {
    const {
        allDecks,
        selectedDecks
    } = getTableState(state);
    return {
        allDecks,
        selectedDecks
    };
}

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        selectDeck: (d: Deck) => dispatch(selectDeck(d)),
        deselectDeck: (d: Deck) => dispatch(deselectDeck(d)),
    }
}

export const connectedDeckSelector = connect(mapStateToProps, mapDispatchToProps)(DeckSelector)

export default connectedDeckSelector;
