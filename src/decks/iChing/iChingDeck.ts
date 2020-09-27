import {DeckInterface} from "../../interface/Deck/DeckInterface";
import iChingCards from "./iChingCards";
import {Card} from "../../interface/Deck/Card";

export class IChingDeck implements DeckInterface {
    constructor() {
        this.name = "iChing";
        this.numberOfCards = iChingCards.length;
        this.imageWidth = 100;
        this.width = 200;
        this.height = 300;
        this.color = "#7c2c85";
        this.allCards = [...iChingCards];
        this.getRandomCardIndex = () => {
            let max = this.remainingCards.length;
            return Math.floor(Math.random() * max) // between 0 and (max -1)
        };
        this.remainingCards = [...iChingCards];
    }

    name: string;
    numberOfCards: number;
    imageWidth: number;
    width: number;
    height: number;
    color: string;
    allCards: Card[];
    getRandomCardIndex: () => number;
    remainingCards: Card[];

}

export const iChingDeck : DeckInterface = new IChingDeck();