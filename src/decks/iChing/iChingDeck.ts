import {Deck} from "../../interface/Deck/Deck";
import iChingCards from "./iChingCards";

export const iChingDeck : Deck = {
    name: "iChing",
    numberOfCards: 64,
    imageWidth: 100,
    width: 200,
    height: 300,
    color: "#7c2c85",
    getAllCards: ()=> iChingCards,
    getRandomCardIndex: function(){
        return Math.floor(Math.random() * this.getRemainingCards().length) // between 0 and (max -1)
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
        remainingCards: iChingCards,
        pulledCards: []
    }
}