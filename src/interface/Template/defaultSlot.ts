import {SlotInterface} from "./SlotInterface";
import {Card} from "../Deck/Card";
import {Deck} from "../Deck/Deck";

export class Slot implements SlotInterface {

    constructor(number: number, name: string) {
        this.number = number;
        this.name = name;
        this.populated = false;
        this.faceDown = true;
    }

    number: number;
    name: string;
    populated: boolean;
    faceDown: boolean;
    card?: Card;
    deck?: Deck;
}

export const defaultSlot : Slot = new Slot(1, "");