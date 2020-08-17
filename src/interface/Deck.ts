export interface Deck {
    name: string;
    numberOfCards: number;
    imageWidth: number,
    width: number,
    height: number,
    color: string;
    getRandomCardIndex(max: number): number;
    getCardTitle(cardIndex: number): string;
    getCardColor(cardIndex: number): string;
    getCardDescription(cardIndex: number): string;
    getCardImage(cardIndex: number): string;
}