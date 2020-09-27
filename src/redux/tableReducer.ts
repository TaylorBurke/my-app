import {TableState} from "../interface/Table/TableState";
import {TableAction} from "../interface/Actions/TableAction";
import {FourDirectionsDeck, fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate} from "../templates/defaultTemplate";
import {RootState} from "../interface/RootState";
import {IChingDeck, iChingDeck} from "../decks/iChing/iChingDeck";
import {Card} from "../interface/Deck/Card";
import {Slot} from "../interface/Template/Slot";
import {TwoCardTemplate} from "../interface/Template/TemplateInterface";
import {DeckInterface} from "../interface/Deck/DeckInterface";
import fourDirectionsCards from "../decks/fourDirections/fourDirectionsCards";
import iChingCards from "../decks/iChing/iChingCards";

export const startingTable: TableState = {
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    stagedDeck: fourDirectionsDeck,
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const getCleanDecks = (): DeckInterface[] => {
    let f = new FourDirectionsDeck({
        remainingCards: fourDirectionsCards,
        pulledCards: []
    });
    let i = new IChingDeck({
        remainingCards: iChingCards,
        pulledCards: []
    });
    return [f, i];
}

// @todo I think this is a problem because the staged deck is a different instance than the 2 selected
const preserveStagedDeck = (table: TableState): DeckInterface => {
    let f = new FourDirectionsDeck({
        remainingCards: [...fourDirectionsCards],
        pulledCards: []
    });
    switch (table.stagedDeck.name){
        case "Four Directions" :
            return f;
        case "iChing" :
            return new IChingDeck({
                remainingCards: [...iChingCards],
                pulledCards: []
            });
        default:
            return f;
    }
}

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
            return {
                ...table,
                isClean: true,
                selectedDecks: getCleanDecks(),
                stagedDeck: preserveStagedDeck(table),
                selectedTemplate: new TwoCardTemplate({
                    slots: [
                        {
                            number: 1,
                            name: "Inner World",
                            populated: false,
                            faceDown: true,
                        },
                        {
                            number: 2,
                            name: "Outer World",
                            populated: false,
                            faceDown: true,
                        },
                    ]
                })
            }
        // reset deck states
        case PULL_CARD:
            let index: number = table.stagedDeck.getRandomCardIndex();
            let remaining: Card[] = table.stagedDeck.getRemainingCards();
            let prevPulled: Card[] = table.stagedDeck.getPulledCards();
            let justPulled: Card = remaining[index];
            // now that the pulled card has been stored from the remaining pile, modify remaining
            remaining.splice(index, 1);
            // used to map through slots and see if a slot should be updated
            const pullCardToSelectedSlot = (slot: Slot, slotNumber: number) => {
                if (slot.number === slotNumber) {
                    slot.populated = true;
                    slot.card = justPulled;
                    slot.deck = table.stagedDeck;
                    return slot;
                }
                return slot;
            }
            return {
                ...table,
                isClean: false,
                stagedDeck: {
                    ...table.stagedDeck,
                    deckState: {
                        remainingCards: remaining,
                        pulledCards: prevPulled.concat(justPulled)
                    }
                },
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
            const flipCardOnSelectedSlot = (slot: Slot, slotNumber: number) => {
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