import {combineReducers} from 'redux';

import {AppState} from "../interface/AppState";
import {AppAction} from "../interface/Actions/AppAction";

import {Template} from "../interface/Template/Template";
import {defaultTemplate} from "../templates/defaultTemplate";

import {Deck} from "../interface/Deck/Deck";
import {fourDirectionsDeck} from '../decks/fourDirections/fourDirectionsDeck'
import {iChingDeck} from "../decks/iChing/iChingDeck";
import {tableReducer} from "./tableReducer";
import {RootState} from "../interface/RootState";


const allDecks : Deck[] = [fourDirectionsDeck, iChingDeck];

const allTemplates : Template[] = [
    defaultTemplate
];

const initialApp : AppState = {
    templates: allTemplates,
    decks: allDecks,
}

const NEW_TEMPLATE = 'NEW_TEMPLATE';

const appReducer = (app: AppState = initialApp, action : AppAction) => {
    switch(action.type){
        case NEW_TEMPLATE:
            return action.payload;
        default:
            return app;
    }
}

export function getAppState (state : RootState){
    const {
        templates,
        decks
    } = state.app;
    return {
        templates,
        decks
    }
}

export const rootReducer = combineReducers({
    table: tableReducer, app: appReducer
})