import {TableState} from "../interface/Table/TableState";
import {TableAction} from "../interface/Actions/TableAction";
import {fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate, perspective, Template, twoCards} from "../interface/Template/defaultTemplate";
import {RootState} from "../interface/RootState";
import {iChingDeck} from "../decks/iChing/iChingDeck";
import {Card} from "../interface/Deck/Card";
import {SlotInterface} from "../interface/Template/SlotInterface";
import {Deck} from "../interface/Deck/Deck";
import {stageDeck} from "../interface/Actions/ActionCreators";


export const startingTable: TableState = {
    allDecks:  [fourDirectionsDeck, iChingDeck],
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    stagedDeck: fourDirectionsDeck,
    allTemplates: [defaultTemplate, twoCards, perspective],
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const cleanDecks = (decks: Deck[]): void => {
    for (const d of decks){
        d.remainingCards = [...d.allCards]
    }
}

const cleanTemplates = (templates: Template[]): void => {
    for (const t of templates){
        for (const s of t.slots){
            s.populated = false;
            s.faceDown = true;
        }
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
        case CREATE_TEMPLATE:
            return {
                ...table,
                allTemplates: [...table.allTemplates, action.payload]
            }
        case SELECT_DECK:
            return {
                ...table,
                selectedDecks: [...table.selectedDecks, action.payload]
            }
        case DESELECT_DECK:
            if (table.stagedDeck === action.payload) {
                const stageQualifiedDeck = (disqualified: Deck) : Deck => {
                    let qualified = table.selectedDecks.filter(d => d != disqualified);
                    return qualified[0];
                }
                return {
                    ...table,
                    stagedDeck: stageQualifiedDeck(action.payload),
                    selectedDecks: [...table.selectedDecks.filter((d)=> d.name != action.payload.name)]
                }
            } else {
                return {
                    ...table,
                    selectedDecks: [...table.selectedDecks.filter((d)=> d.name != action.payload.name)]
                }
            }
        case STAGE_DECK:
            return {
                ...table,
                stagedDeck: action.payload
            };
        case SELECT_TEMPLATE:
            return {
                ...table,
                selectedTemplate: action.payload
            }
        case CLEAN_TABLE:
            cleanDecks(table.selectedDecks);
            cleanTemplates(table.allTemplates);
            return {
                ...table,
                isClean: true,
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
                        slots: table.selectedTemplate.slots.map((s) => {
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
                        slots: table.selectedTemplate.slots.map((s) => {
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
        allTemplates,
        allDecks,
        selectedDecks,
        selectedTemplate,
        isClean,
        stagedDeck,
    } = state.table;
    return {
        allTemplates,
        allDecks,
        selectedDecks,
        selectedTemplate,
        isClean,
        stagedDeck,
    }
}