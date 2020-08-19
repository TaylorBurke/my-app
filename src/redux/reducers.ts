import {combineReducers} from 'redux';
import {DeckState} from "../interface/DeckState";
import {TableState} from "../interface/TableState";
import {fourDirectionsDeck} from '../decks/fourDirections/fourDirectionsDeck'
import {DeckAction} from "../interface/DeckAction";
import {TableAction} from "../interface/TableAction";


const initialDeck : DeckState = {
    remainingCards: fourDirectionsDeck.getAllCards(),
    pulledCards: []
};

const initialTable : TableState = {
    selectedDecks: [fourDirectionsDeck],
    faceDownCards: [],
    flippedCards: []
}

const SELECT_DECK = 'SELECT_DECK';
const DESELECT_DECK = 'DESELECT_DECK';
const RESET_TABLE = "RESET_TABLE";

const tableReducer = (table: TableState = initialTable, action: TableAction) => {
    switch (action.type) {
        case SELECT_DECK:
            return action.payload;
        case DESELECT_DECK:
            return action.payload;
        case RESET_TABLE:
            return initialTable;
        default:
            return table;
    }
}

const DRAW_CARD = 'DRAW_CARD';
const FLIP_CARD = 'FLIP_CARD';
const RESET_DECK = 'RESET_DECK';

const deckReducer = (deck: DeckState = initialDeck, action : DeckAction) => {
    switch(action.type){
        case DRAW_CARD:
            return action.payload;
        case FLIP_CARD:
            return action.payload;
        case RESET_DECK:
            return initialDeck;
        default:
            return deck;
    }
}

export const rootReducer = combineReducers({
    deckReducer, tableReducer
})