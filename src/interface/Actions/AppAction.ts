import {AppState} from "../AppState";

export interface AppAction {
    type: string;
    payload: AppState;
}