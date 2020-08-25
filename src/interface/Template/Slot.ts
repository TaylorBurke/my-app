import {Card} from "../Deck/Card";

export interface Slot {
    number: number;
    name: string;
    populated: boolean;
    faceDown: boolean;
    card?: Card;
}