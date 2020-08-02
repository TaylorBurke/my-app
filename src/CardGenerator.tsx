import React from 'react';
import {Deck} from "./Deck";

type DeckProps = {
    deck: Deck,
    artist: String,
}

const CardGenerator = ({deck, artist}: DeckProps) => {

    const {numberOfCards, getRandomCardIndex, getCardTitle, getCardImage, getCardDescription} = deck;

    const chosenCardIndex = getRandomCardIndex(numberOfCards);

    return (
        <div style={{backgroundColor: deck.color}}>
            <h2>{getCardTitle(chosenCardIndex)}</h2>
            <img width="50" src={getCardImage(chosenCardIndex)} className="image" alt="" />
            <br />
            <a href={getCardDescription(chosenCardIndex)}>Read Details</a>

            {/* <p>By: {artist}</p> */}
        </div>
    )
}

export default CardGenerator;