export interface Deck {
    numberOfCards: number;
    getRandomCardIndex(max: number): number;
    getCardTitle(cardIndex: number): string;
    getCardDescription(cardIndex: number): string;
    getCardImage(cardIndex: number): ImageBitmap;
}