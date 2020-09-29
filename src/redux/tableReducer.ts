import {TableState} from "../interface/Table/TableState";
import {fourDirectionsDeck} from "../decks/fourDirections/fourDirectionsDeck";
import {defaultTemplate, perspective, Template, twoCards} from "../interface/Template/defaultTemplate";
import {RootState} from "../interface/RootState";
import {iChingDeck} from "../decks/iChing/iChingDeck";
import {Card} from "../interface/Deck/Card";
import {Deck} from "../interface/Deck/Deck";
import {createReducer} from '@reduxjs/toolkit';
import {Slot} from "../interface/Template/defaultSlot";

export const startingTable: TableState = {
    allDecks: [fourDirectionsDeck, iChingDeck],
    selectedDecks: [fourDirectionsDeck, iChingDeck],
    stagedDeck: fourDirectionsDeck,
    allTemplates: [defaultTemplate, twoCards, perspective],
    selectedTemplate: defaultTemplate,
    isClean: true,
};

const updatePulledSlot = (slot: Slot, slotNumber: number, card: Card, deck: Deck): Slot => {
    if (slot.number === slotNumber) {
        slot.populated = true;
        slot.card = card;
        slot.deck = deck;
        return slot;
    }
    return slot;
}

const updateFlippedSlot = (slot: Slot, slotNumber: number): Slot => {
    if (slot.number === slotNumber) {
        slot.faceDown = false;
        return slot;
    }
    return slot;
}

const cleanDecks = (decks: Deck[]): Deck[] => {
    for (const d of decks) {
        d.remainingCards = [...d.allCards]
    }
    return decks;
}

const cleanTemplates = (templates: Template[]): Template[] => {
    for (const t of templates) {
        for (const s of t.slots) {
            s.populated = false;
            s.faceDown = true;
        }
    }
    return templates;
}

const findDeckToStage = (disqualified: Deck, selectedDecks: Deck[]): Deck => {
    let qualified = selectedDecks.filter(d => d.name != disqualified.name);
    return qualified[0];
}

// createReducer magically returns a new state - adheres to "don't mutate state" rule
export const tableReducer = createReducer(startingTable, {
    CREATE_TEMPLATE: (state, action) => {
        state.allTemplates = [...state.allTemplates, action.payload];
    },
    SELECT_DECK: (state, action) => {
        state.selectedDecks = [...state.selectedDecks, action.payload]
    },
    DESELECT_DECK: (state, action) => {
        if (state.stagedDeck.name === action.payload.name) {
            state.stagedDeck = findDeckToStage(action.payload, state.selectedDecks);
            state.selectedDecks = [...state.selectedDecks.filter((d) => d.name != action.payload.name)];
        } else {
            state.selectedDecks = [...state.selectedDecks.filter((d) => d.name != action.payload.name)];
        }
    },
    STAGE_DECK: (state, action) => {
        state.stagedDeck = action.payload;
    },
    SELECT_TEMPLATE: (state, action) => {
        state.selectedTemplate = action.payload;
    },
    CLEAN_TABLE: (state, action) => {
        if (!state.isClean) {
            state.allTemplates = cleanTemplates(state.allTemplates);
            let [cleanSelected] = [...cleanTemplates([state.selectedTemplate])];
            state.selectedTemplate = cleanSelected;
            state.allDecks = cleanDecks(state.allDecks);
            state.selectedDecks = cleanDecks(state.selectedDecks);
            let [cleanStaged] = [...cleanDecks([state.stagedDeck])];
            state.stagedDeck = cleanStaged;
            state.isClean = true;
        }
    },
    PULL_CARD: (state, action) => {
        let pulled: Card = state.stagedDeck.pullRandomCard();
        state.isClean = false;
        state.selectedTemplate.slots = state.selectedTemplate.slots.map(s=> {
            return updatePulledSlot(s, action.payload, pulled, state.stagedDeck);
        });
    },
    FLIP_CARD: (state, action) => {
        state.selectedTemplate.slots = state.selectedTemplate.slots.map(s=> {
            return updateFlippedSlot(s, action.payload);
        });
    }
})

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