interface CardInterface {
    title: string;
    description: string;
    details: string;
    image: string;
    color: string;
}

export class Card implements CardInterface {
    constructor(title: string, description: string, details: string, image: string, color: string) {
        this.title = title;
        this.details = details;
        this.description = description;
        this.image = image;
        this.color = color;
    }
    title: string;
    description: string;
    details: string;
    image: string;
    color: string;
}