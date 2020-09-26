import {DeckInterface} from "../../interface/Deck/DeckInterface";
import fourDirectionsCards from "./fourDirectionsCards";
import {DeckState} from "../../interface/Deck/DeckState";
import {Card} from "../../interface/Deck/Card";

export class FourDirectionsDeck implements DeckInterface {
    constructor(deckState: DeckState) {
        this.deckState = deckState;
        this.name = "Four Directions";
        this.numberOfCards = 4;
        this.imageWidth = 100;
        this.width = 200;
        this.height = 250;
        this.color = "#823e0e";
        this.getAllCards = () => fourDirectionsCards;
        this.getRandomCardIndex = () => {
            let max = this.getRemainingCards().length;
            return Math.floor(Math.random() * max) // between 0 and (max -1)
        };
        this.getRemainingCards = () => {
            return this.deckState.remainingCards;
        };
        this.getCardTitle = (cardIndex) => {
            return this.getPulledCards()[cardIndex].title
        };
        this.getPulledCards = () => {
            return this.deckState.pulledCards;
        };
        this.getCardColor = (cardIndex) => {
            return this.getPulledCards()[cardIndex].color
        };
        this.getCardDescription = (cardIndex) => {
            return this.getPulledCards()[cardIndex].description
        };
        this.getCardImage = (cardIndex) => {
            return this.getPulledCards()[cardIndex].image
        };
    }

    deckState: {
        remainingCards: Card[],
        pulledCards: Card[]
    }
    name: string;
    numberOfCards: number;
    imageWidth: number;
    width: number;
    height: number;
    color: string;
    getAllCards: () => Card[];
    getRandomCardIndex: () => number;
    getRemainingCards: () => Card[];
    getCardTitle: (cardIndex: number) => string;
    getPulledCards: () => Card[];
    getCardColor: (cardIndex: number) => string;
    getCardDescription: (cardIndex: number) => string;
    getCardImage: (cardIndex: number) => string;

}


export const fourDirectionsDeck : DeckInterface = new FourDirectionsDeck({
    remainingCards: [...fourDirectionsCards],
    pulledCards: []
});