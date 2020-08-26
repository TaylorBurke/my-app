import {AppState} from "./AppState";
import {TableState} from "./Table/TableState";

export interface RootState {
    app: AppState,
    table: TableState,
}