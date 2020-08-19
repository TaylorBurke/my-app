import {TableState} from "./TableState";

export interface TableAction {
    type: string
    payload: TableState
}