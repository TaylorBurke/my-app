import {DeckState} from "./DeckState";

export interface DeckAction {
    type: string
    payload: DeckState
}