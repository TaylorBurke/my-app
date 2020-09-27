import {TableState} from "../interface/Table/TableState";
import {TableAction} from "../interface/Actions/TableAction";
import {FourDirectionsDeck, fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate, Template} from "../interface/Template/defaultTemplate";
import {RootState} from "../interface/RootState";
import {IChingDeck, iChingDeck} from "../decks/iChing/iChingDeck";
import {Card} from "../interface/Deck/Card";
import {SlotInterface} from "../interface/Template/SlotInterface";
import {Deck} from "../interface/Deck/Deck";
import {defaultSlot, Slot} from "../interface/Template/defaultSlot";


export const startingTable: TableState = {
    allDecks:  [fourDirectionsDeck, iChingDeck],
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    stagedDeck: fourDirectionsDeck,
    allTemplates: [defaultTemplate],
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const getCleanDecks = (): Deck[] => {
    let f = new FourDirectionsDeck();
    let i = new IChingDeck();
    return [f, i];
}

const getIndexOfStagedDeck = (table: TableState): number => {
    switch (table.stagedDeck.name){
        case "Four Directions" :
            return 0;
        case "iChing" :
            return 1;
        default:
            return 0;
    }
}

const SELECT_DECK = 'SELECT_DECK'; // moves a deck onto the table
const DESELECT_DECK = 'DESELECT_DECK'; // removes a deck from the table
const STAGE_DECK = 'STAGE_DECK'; // next card will be pulled from the staged deck
const CREATE_TEMPLATE = 'CREATE_TEMPLATE'; // construct a template from user input and put it in
const SELECT_TEMPLATE = 'SELECT_TEMPLATE'; // choose a template to use for the table
const CLEAN_TABLE = "CLEAN_TABLE"; // clear all slots and reset all deck states (template and staged decks are not changed)
const PULL_CARD = "PULL_CARD"; // move a card from the selected deck into the next slot, to remain face down
const FLIP_CARD = "FLIP_CARD"; // change the face up status of the current slot

export const tableReducer = (table: TableState = startingTable, action: TableAction) => {
    switch (action.type) {
        case SELECT_DECK:
            // return action.payload;
        case DESELECT_DECK:
            // return action.payload;
        case STAGE_DECK:
            return {
                ...table,
                stagedDeck: action.payload
            };
        case SELECT_TEMPLATE:
            // return action.payload;
        case CLEAN_TABLE:
            let selected = getCleanDecks();
            return {
                ...table,
                isClean: true,
                selectedDecks: selected,
                stagedDeck: selected[getIndexOfStagedDeck(table)],
                selectedTemplate: new Template("default", [{...defaultSlot}])
            }
        // reset deck states
        case PULL_CARD:
            let index: number = table.stagedDeck.getRandomCardIndex();
            let remaining: Card[] = table.stagedDeck.remainingCards;
            let pulled: Card = remaining[index];
            // now that the pulled card has been stored from the remaining pile, modify remaining
            remaining.splice(index, 1);
            // used to map through slots and see if a slot should be updated
            const pullCardToSelectedSlot = (slot: SlotInterface, slotNumber: number) => {
                if (slot.number === slotNumber) {
                    slot.populated = true;
                    slot.card = pulled;
                    slot.deck = table.stagedDeck;
                    return slot;
                }
                return slot;
            }
            return {
                ...table,
                isClean: false,
                selectedTemplate: {
                    ...table.selectedTemplate,
                    templateState: {
                        slots: table.selectedTemplate.templateState.slots.map((s) => {
                            return pullCardToSelectedSlot(s, action.payload)
                        })
                    }
                }
            }
        case FLIP_CARD:
            const flipCardOnSelectedSlot = (slot: SlotInterface, slotNumber: number) => {
                if (slot.number === slotNumber) {
                    slot.faceDown = false;
                    return slot;
                }
                return slot;
            }
            return {
                ...table,
                selectedTemplate: {
                    ...table.selectedTemplate,
                    templateState: {
                        slots: table.selectedTemplate.templateState.slots.map((s) => {
                            return flipCardOnSelectedSlot(s, action.payload)
                        })
                    }
                }
            }
        default:
            return table;
    }
}

export function getTableState(state: RootState) {
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