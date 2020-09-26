import {DeckInterface} from "../../interface/Deck/DeckInterface";
import iChingCards from "./iChingCards";
import {DeckState} from "../../interface/Deck/DeckState";
import fourDirectionsCards from "../fourDirections/fourDirectionsCards";
import {Card} from "../../interface/Deck/Card";

export class IChingDeck implements DeckInterface {
    constructor(deckState: DeckState) {
        this.deckState = deckState;
        this.name = "iChing";
        this.numberOfCards = 64;
        this.imageWidth = 100;
        this.width = 200;
        this.height = 300;
        this.color = "#7c2c85";
        this.getAllCards = () => iChingCards;
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

export const iChingDeck : DeckInterface = new IChingDeck({
    remainingCards: [...iChingCards],
    pulledCards: []
});