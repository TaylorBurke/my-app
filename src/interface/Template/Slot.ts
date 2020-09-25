import {Card} from "../Deck/Card";
import {Deck} from "../Deck/Deck";

export interface Slot {
    number: number;
    name: string;
    populated: boolean;
    faceDown: boolean;
    card?: Card;
    deck?: Deck;
}