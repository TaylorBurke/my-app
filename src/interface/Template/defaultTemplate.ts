import {TemplateInterface} from "./TemplateInterface";
import {defaultSlot, Slot} from "./defaultSlot";


export class Template implements TemplateInterface {
    constructor(name : string, slots : Slot[] ) {
        this.name = name;
        this.slots = slots;
    }

    name: string;
    slots: Slot[];

}

export const defaultTemplate : Template = {
    name: "Default",
    slots: [{...defaultSlot}]
};

export const twoCards : Template = {
    name: "2 cards",
    slots: [
            new Slot(1, ""),
            new Slot(2, ""),
        ]
}

export const perspective : Template = {
    name: "Perspective",
    slots: [
            new Slot(1, "Past"),
            new Slot(2, "Present"),
            new Slot(3, "Future"),
        ]
}
