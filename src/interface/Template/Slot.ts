import {Card} from "../Deck/Card";
import {DeckInterface} from "../Deck/DeckInterface";

export interface Slot {
    number: number;
    name: string;
    populated: boolean;
    faceDown: boolean;
    card?: Card;
    deck?: DeckInterface;
}