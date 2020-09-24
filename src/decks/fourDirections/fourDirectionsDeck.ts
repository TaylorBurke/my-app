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
    getRandomCardIndex: function(){
        let max = this.getRemainingCards().length;
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    },
    getCardTitle: function(cardIndex){
        return this.getPulledCards()[cardIndex].title
    },
    getCardColor: function(cardIndex){
        return this.getPulledCards()[cardIndex].color
    },
    getCardDescription: function(cardIndex){
        return this.getPulledCards()[cardIndex].description
    },
    getCardImage: function(cardIndex){
        return this.getPulledCards()[cardIndex].image
    },
    getPulledCards: function(){
        return this.deckState.pulledCards;
    },
    getRemainingCards: function(){
        return this.deckState.remainingCards;
    },
    deckState: {
        remainingCards: fourDirectionsCards,
        pulledCards: []
    }
}