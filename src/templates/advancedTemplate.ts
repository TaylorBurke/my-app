import {Template} from "../interface/Template/Template";

export const advancedTemplate : Template = {
    title: "Pull Four",
    numberOfCards: 4,
    templateState: {
        slots: [
            {
                number: 1,
                name: "East",
                populated: false,
                faceDown: true,
            },
            {
                number: 2,
                name: "South",
                populated: false,
                faceDown: true,
            },
            {
                number: 3,
                name: "West",
                populated: false,
                faceDown: true,
            },
            {
                number: 4,
                name: "North",
                populated: false,
                faceDown: true,
            },
        ]
    }
};