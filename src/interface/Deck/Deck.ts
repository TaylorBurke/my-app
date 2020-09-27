import {DeckInterface} from "./DeckInterface";
import {Card} from "./Card";

export class Deck implements DeckInterface{
    constructor(name: string, allCards: Card[], color: string, height: number, imageWidth: number, width: number) {
        this.name = name;
        this.allCards = [...allCards];
        this.color = color;
        this.height = height;
        this.imageWidth = imageWidth;
        this.numberOfCards = allCards.length;
        this.remainingCards = [...allCards];
        this.width = width;
        this.getRandomCardIndex = () => {
            let max = this.remainingCards.length;
            return Math.floor(Math.random() * max) // between 0 and (max -1)
        };
    }
    allCards: Card[];
    color: string;
    height: number;
    imageWidth: number;
    name: string;
    numberOfCards: number;
    remainingCards: Card[];
    width: number;
    getRandomCardIndex: () => number;

}