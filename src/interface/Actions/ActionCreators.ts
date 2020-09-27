import {Template} from "../Template/defaultTemplate";
import {Deck} from "../Deck/Deck";

export const selectDeck = (d: Deck) => ({type: 'SELECT_DECK', payload: d});

export const deselectDeck = (d: Deck) => ({type: 'DESELECT_DECK', payload: d});

export const createTemplate = (t: Template) => ({type: 'CREATE_TEMPLATE', payload: t});

export const selectTemplate = (t: Template) => ({type: 'SELECT_TEMPLATE', payload: t});

export const stageDeck = (d: Deck) => ({type: 'STAGE_DECK', payload: d});

export const cleanTable = () => ({type: 'CLEAN_TABLE'});

export const pullCard = (slotNumber: number) => ({type: 'PULL_CARD', payload: slotNumber});

export const flipCard = (slotNumber: number) => ({type: 'FLIP_CARD', payload: slotNumber});