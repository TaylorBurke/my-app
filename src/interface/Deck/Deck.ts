import {Card} from "./Card";
import {DeckState} from "./DeckState";

export interface Deck {
    name: string;
    numberOfCards: number;
    imageWidth: number,
    width: number,
    height: number,
    color: string;
    getAllCards(): Card[];
    getRandomCardIndex(): number;
    getCardTitle(cardIndex: number): string;
    getCardColor(cardIndex: number): string;
    getCardDescription(cardIndex: number): string;
    getCardImage(cardIndex: number): string;
    getPulledCards(): Card[];
    getRemainingCards(): Card[];
    deckState: DeckState;
}