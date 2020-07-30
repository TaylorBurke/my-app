import React from 'react';
import hexData from "./hexagramData";
import {Deck} from "./Deck";

type DeckProps = {
    deck: Deck,
    artist: String,
}

const CardGenerator = ({deck, artist}: DeckProps) => {

    const {numberOfCards, getRandomCardIndex, getCardTitle, getCardImage, getCardDescription} = deck;

    const chosenCardIndex = getRandomCardIndex(numberOfCards);

    return (
        <div>
            <h2>{getCardTitle(chosenCardIndex)}</h2>
            <img src={getCardImage(chosenCardIndex)} className="hexagram" alt="hexagram" />
            <br />
            <a href={getCardDescription(chosenCardIndex)}>Read Details</a>

            <p>By: {artist}</p>
        </div>
    )
}

export default CardGenerator;