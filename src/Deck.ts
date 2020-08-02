export interface Deck {
    numberOfCards: number;
    color: string;
    getRandomCardIndex(max: number): number;
    getCardTitle(cardIndex: number): string;
    getCardDescription(cardIndex: number): string;
    getCardImage(cardIndex: number): string;
}