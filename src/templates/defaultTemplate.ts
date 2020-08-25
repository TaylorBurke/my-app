import {Template} from "../interface/Template/Template";

export const defaultTemplate : Template = {
    title: "Pull One",
    numberOfCards: 1,
    templateState: {
        slots: [
            {
                number: 1,
                name: "Today's Card",
                populated: false,
                faceDown: true,
            }
        ]
    }
};