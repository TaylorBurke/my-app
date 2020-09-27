import {DeckInterface} from "../Deck/DeckInterface";

export const stageDeck = (d: DeckInterface) => ({type: 'STAGE_DECK', payload: d})

export const cleanTable = () => ({type: 'CLEAN_TABLE'});

export const pullCard = (slotNumber: number) => ({type: 'PULL_CARD', payload: slotNumber});

export const flipCard = (slotNumber: number) => ({type: 'FLIP_CARD', payload: slotNumber});