import {Template} from "./Template/Template";
import {Deck} from "./Deck/Deck";

export interface AppState {
    templates: Template[];
    decks: Deck[];
}