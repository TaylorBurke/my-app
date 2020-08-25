import {Slot} from "./Slot";
import {TemplateState} from "./TemplateState";

export interface Template {
    title: string;
    numberOfCards: number;
    templateState: TemplateState;
}