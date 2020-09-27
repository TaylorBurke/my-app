
import {Deck} from "../Deck/Deck";
import {Template} from "../Template/defaultTemplate";

export interface TableState {
    allDecks: Deck[];
    selectedDecks: Deck[];
    stagedDeck: Deck;
    allTemplates: Template[];
    selectedTemplate: Template;
    isClean: boolean;
}