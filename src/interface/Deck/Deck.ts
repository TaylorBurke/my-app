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
        this.pullRandomCard = () => {
            let max = this.remainingCards.length;
            let index = Math.floor(Math.random() * max);
            let pulled = this.remainingCards[index];
            // as a side effect, the pulled card is removed from remaining cards
            this.remainingCards.splice(index, 1);
            return pulled;
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
    pullRandomCard: () => Card;

}