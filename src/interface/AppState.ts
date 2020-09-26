import {TemplateInterface} from "./Template/TemplateInterface";
import {DeckInterface} from "./Deck/DeckInterface";

export interface AppState {
    templates: TemplateInterface[];
    decks: DeckInterface[];
}