import React from 'react';
import hexData from "./hexagramData";

const CardGenerator = () => {

    const numberOfCards = 64;

    const getRandomCardIndex = (max: number) : number  => {
        return Math.floor(Math.random() * max) // between 0 and (max -1)
    }

    const getCardTitle = (cardIndex: number) : string => {
        return (
            hexData[cardIndex].title
        )
    }

    const getCardDescription = (cardIndex: number) : string  => {
        return (
            hexData[cardIndex].description
        )
    }

    const getCardImage = (cardIndex: number) : string  => {
        return (
            hexData[cardIndex].image
        )
    }

    const chosenCardIndex = getRandomCardIndex(numberOfCards);

    return (
        <div>
            <h2>{getCardTitle(chosenCardIndex)}</h2>
            <img src={getCardImage(chosenCardIndex)} className="hexagram" alt="hexagram" />
            <br />
            <a href={getCardDescription(chosenCardIndex)}>Read Details</a>
        </div>
    )
}

export default CardGenerator;