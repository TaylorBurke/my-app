import {Card} from "../Deck/Card";
import {Deck} from "../Deck/Deck";

export interface SlotInterface {
    number: number;
    name: string;
    populated: boolean;
    faceDown: boolean;
    card?: Card;
    deck?: Deck;
}