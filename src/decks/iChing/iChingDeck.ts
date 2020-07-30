import {Deck} from "../../Deck";
import iChingCards from "./iChingCards";

export const iChingDeck : Deck = {
    numberOfCards: 64,
    getRandomCardIndex: (max)=>{
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: (cardIndex) => {
        return iChingCards[cardIndex].title
    },
    getCardDescription: (cardIndex: number) => {
        return iChingCards[cardIndex].description
    },
    getCardImage: (cardIndex) => {
        return iChingCards[cardIndex].image
    },
}