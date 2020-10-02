import {DeckInterface} from "../../interface/Deck/DeckInterface";
import iChingCards from "./iChingCards";
import {Deck} from "../../interface/Deck/Deck";

export class IChingDeck extends Deck implements DeckInterface{
    constructor() {
        super("iChing", iChingCards, '#7c2c85', 265, 100, 200)
    }
}

export const iChingDeck : Deck = new IChingDeck();