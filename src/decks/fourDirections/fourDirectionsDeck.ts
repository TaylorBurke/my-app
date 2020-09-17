import {Deck} from "../../interface/Deck/Deck";
import fourDirectionsCards from "./fourDirectionsCards";

export const fourDirectionsDeck : Deck = {
    name: "Four Directions",
    numberOfCards: 4,
    imageWidth: 100,
    width: 200,
    height: 250,
    color: "#823e0e",
    getAllCards: ()=> fourDirectionsCards,
    getRandomCardIndex: ()=>{
        return Math.floor(Math.random() * 4) // between 0 and (max -1)
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
    deckState: {
        remainingCards: fourDirectionsCards,
        pulledCards: []
    }
}