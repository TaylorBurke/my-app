import {TableState} from "../Table/TableState";

export interface TableAction {
    type: string
    payload: TableState
}