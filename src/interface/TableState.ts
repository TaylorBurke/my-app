import {Deck} from "./Deck";
import {Card} from "./Card";

export interface TableState {
    selectedDecks: Deck[]
    faceDownCards: Card[]
    flippedCards: Card[]
}