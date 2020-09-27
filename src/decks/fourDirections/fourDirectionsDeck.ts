import {DeckInterface} from "../../interface/Deck/DeckInterface";
import fourDirectionsCards from "./fourDirectionsCards";
import {Deck} from "../../interface/Deck/Deck";

export class FourDirectionsDeck extends Deck implements DeckInterface {
    constructor() {
        super("Four Directions", fourDirectionsCards, "#823e0e", 250, 100, 200);
    }
}


export const fourDirectionsDeck : Deck = new FourDirectionsDeck();