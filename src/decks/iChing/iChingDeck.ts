import {Deck} from "../../interface/Deck";
import iChingCards from "./iChingCards";

export const iChingDeck : Deck = {
    name: "iChing",
    numberOfCards: 64,
    imageWidth: 100,
    width: 200,
    height: 300,
    color: "gray",
    getRandomCardIndex: (max)=>{
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: (cardIndex) => {
        return iChingCards[cardIndex].title
    },
    getCardColor: (cardIndex) => {
        return iChingCards[cardIndex].color
    },
    getCardDescription: (cardIndex: number) => {
        return iChingCards[cardIndex].description
    },
    getCardImage: (cardIndex) => {
        return iChingCards[cardIndex].image
    },
}