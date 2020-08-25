import {Deck} from "../Deck/Deck";
import {Template} from "../Template/Template";

export interface TableState {
    selectedDecks: Deck[];
    selectedTemplate: Template;
    isClean: boolean;
}