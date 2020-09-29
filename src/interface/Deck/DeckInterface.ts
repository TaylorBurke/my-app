import {Card} from "./Card";

export interface DeckInterface {
    name: string;
    numberOfCards: number;
    imageWidth: number,
    width: number,
    height: number,
    color: string;
    allCards: Card[];
    pullRandomCard(): Card;
    remainingCards: Card[];
}