import {Slot} from "./Slot";
import {TemplateState} from "./TemplateState";

export interface TemplateInterface {
    title: string;
    numberOfCards: number;
    templateState: TemplateState;
}

export interface TemplateConstructor {
    new (title: string, numberOfCards: number, templateState: TemplateState) : TemplateInterface;
}

export function createTemplate(
    ctor: TemplateConstructor,
    title: string,
    numberOfCards: number,
    templateState: TemplateState
) : TemplateInterface {
    return new ctor(title, numberOfCards, templateState);
}

export class TwoCardTemplate implements TemplateInterface {
    title: string;
    numberOfCards: number;
    templateState: TemplateState;
    constructor(templateState: TemplateState){
        this.title = "Draw Two";
        this.numberOfCards = 2;
        this.templateState = templateState;
    }
}