import {TableState} from "../interface/Table/TableState";
import {TableAction} from "../interface/Actions/TableAction";
import {fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate} from "../templates/defaultTemplate";
import {RootState} from "../interface/RootState";
import {iChingDeck} from "../decks/iChing/iChingDeck";

export const startingTable : TableState = {
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const SELECT_DECK = 'SELECT_DECK';
const SELECT_TEMPLATE = 'SELECT_TEMPLATE';
const CLEAN_TABLE = "CLEAN_TABLE";
const PULL_CARD = "PULL_CARD";
const FLIP_CARD = "FLIP_CARD";

export const tableReducer = (table: TableState = startingTable, action: TableAction) => {
    switch (action.type) {
        case SELECT_DECK:
            return action.payload;
        case SELECT_TEMPLATE:
            return action.payload;
        case CLEAN_TABLE:
            return action.payload;
        case PULL_CARD:
            return action.payload;
        case FLIP_CARD:
            return action.payload;
        default:
            return table;
    }
}

export function getTableState(state : RootState){
    const {
        selectedDecks,
        selectedTemplate,
        isClean,
    } = state.table;
    return {
        selectedDecks,
        selectedTemplate,
        isClean,
    }
}