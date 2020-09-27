import {TemplateInterface} from "../interface/Template/TemplateInterface";

//@todo face it - it's time to introduce classes and construct instances, it will solve your problem of cleaning the table (and default field values for slots too!)
export const defaultTemplate : TemplateInterface = {
    title: "Pull One",
    numberOfCards: 1,
    templateState: {
        slots: [
            {
                number: 1,
                name: "Inner World",
                populated: false,
                faceDown: true,
            },
            {
                number: 2,
                name: "Outer World",
                populated: false,
                faceDown: true,
            },
        ]
    }
};

