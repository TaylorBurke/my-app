import {Deck} from "../../interface/Deck";
import fourDirectionsCards from "./fourDirectionsCards";

export const fourDirectionsDeck : Deck = {
    numberOfCards: 4,
    imageWidth: 100,
    width: 200,
    height: 250,
    color: "yellow",
    getRandomCardIndex: (max)=>{
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: (cardIndex) => {
        return fourDirectionsCards[cardIndex].title
    },
    getCardColor: (cardIndex) => {
        return fourDirectionsCards[cardIndex].color
    },
    getCardDescription: (cardIndex: number) => {
        return fourDirectionsCards[cardIndex].description
    },
    getCardImage: (cardIndex) => {
        return fourDirectionsCards[cardIndex].image
    },
}