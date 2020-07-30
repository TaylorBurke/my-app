import {Deck} from "./Deck";
import hexData from "./hexagramData";

export const iChingDeck : Deck = {
    numberOfCards: 64,
    getRandomCardIndex: (max)=>{
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: (cardIndex) => {
        return hexData[cardIndex].title
    },
    getCardDescription: (cardIndex: number) => {
        return hexData[cardIndex].description
    },
    getCardImage: (cardIndex) => {
        return hexData[cardIndex].image
    },
}