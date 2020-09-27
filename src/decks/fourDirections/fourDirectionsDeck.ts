import {DeckInterface} from "../../interface/Deck/DeckInterface";
import fourDirectionsCards from "./fourDirectionsCards";
import {Card} from "../../interface/Deck/Card";

export class FourDirectionsDeck implements DeckInterface {
    constructor() {
        this.name = "Four Directions";
        this.numberOfCards = fourDirectionsCards.length;
        this.imageWidth = 100;
        this.width = 200;
        this.height = 250;
        this.color = "#823e0e";
        this.allCards = [...fourDirectionsCards];
        this.remainingCards = [...fourDirectionsCards];
        this.getRandomCardIndex = () => {
            let max = this.remainingCards.length;
            return Math.floor(Math.random() * max) // between 0 and (max -1)
        };
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


export const fourDirectionsDeck : DeckInterface = new FourDirectionsDeck();