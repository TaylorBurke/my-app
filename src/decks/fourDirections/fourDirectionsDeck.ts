import {Deck} from "../../Deck";
import fourDirectionsCards from "./fourDirectionsCards";

export const fourDirectionsDeck : Deck = {
    numberOfCards: 4,
    color: "yellow",
    getRandomCardIndex: (max)=>{
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: (cardIndex) => {
        return fourDirectionsCards[cardIndex].title
    },
    getCardDescription: (cardIndex: number) => {
        return fourDirectionsCards[cardIndex].description
    },
    getCardImage: (cardIndex) => {
        return fourDirectionsCards[cardIndex].image
    },
}