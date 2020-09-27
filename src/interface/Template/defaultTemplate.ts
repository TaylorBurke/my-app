import {TemplateInterface} from "./TemplateInterface";
import {defaultSlot, Slot} from "./defaultSlot";


export class Template implements TemplateInterface {
    constructor(name : string, slots : Slot[] ) {
        this.name = name;
        this.templateState = {
            slots
        }
    }

    name: string;
    templateState: {
        slots: Slot[]
    }

}

export const defaultTemplate : Template = {
    name: "default",
    templateState: {
        slots: [
            {...defaultSlot}
        ]
    }
};

