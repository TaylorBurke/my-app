import {DeckInterface} from "../Deck/DeckInterface";
import {TemplateInterface} from "../Template/TemplateInterface";

export interface TableState {
    selectedDecks: DeckInterface[];
    stagedDeck: DeckInterface;
    selectedTemplate: TemplateInterface;
    isClean: boolean;
}