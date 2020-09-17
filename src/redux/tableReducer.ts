import {TableState} from "../interface/Table/TableState";
import {TableAction} from "../interface/Actions/TableAction";
import {fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate} from "../templates/defaultTemplate";
import {RootState} from "../interface/RootState";
import {iChingDeck} from "../decks/iChing/iChingDeck";

export const startingTable : TableState = {
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    stagedDeck: fourDirectionsDeck,
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const SELECT_DECK = 'SELECT_DECK'; // moves a deck onto the table
const DESELECT_DECK = 'DESELECT_DECK'; // removes a deck from the table
const STAGE_DECK = 'STAGE_DECK'; // next card will be pulled from the staged deck
const SELECT_TEMPLATE = 'SELECT_TEMPLATE'; // choose a template to use for the table
const CLEAN_TABLE = "CLEAN_TABLE"; // clear all slots and reset all deck states (template and staged decks are not changed)
const PULL_CARD = "PULL_CARD"; // move a card from the selected deck into the next slot, to remain face down
const FLIP_CARD = "FLIP_CARD"; // change the face up status of the current slot

export const tableReducer = (table: TableState = startingTable, action: TableAction) => {
    switch (action.type) {
        case SELECT_DECK:
            return action.payload;
        case DESELECT_DECK:
            return action.payload;
        case STAGE_DECK:
            return {
                ...table,
                stagedDeck: action.payload
            };
        case SELECT_TEMPLATE:
            return action.payload;
        case CLEAN_TABLE:
            return {
                ...table,
            }
            // reset deck states
        case PULL_CARD:
            return {
                ...table,
// pull card must modify table state the following ways:
// of the staged deck deck state, put a random card into its pulled cards property and remove that card from the remaining cards property
//  of the template state, slot number clicked, populated becomes true, facedown stays true, and card becomes the random card
            }
            // todo: determine how to instantiate a deck and manage its state
            // create more reducers? 
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
        stagedDeck,
    } = state.table;
    return {
        selectedDecks,
        selectedTemplate,
        isClean,
        stagedDeck,
    }
}