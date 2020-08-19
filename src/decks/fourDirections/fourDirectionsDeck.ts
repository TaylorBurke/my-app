import {Deck} from "../../interface/Deck";
import fourDirectionsCards from "./fourDirectionsCards";

export const fourDirectionsDeck : Deck = {
    name: "Four Directions",
    numberOfCards: 4,
    imageWidth: 100,
    width: 200,
    height: 250,
    color: "yellow",
    getAllCards: ()=> fourDirectionsCards,
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