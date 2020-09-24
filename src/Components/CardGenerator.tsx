import React from 'react';
import {Deck} from "../interface/Deck/Deck";
import styled, {ThemeProvider} from 'styled-components';

type DeckProps = {
    deck: Deck,
}

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.5)',
};


const CardGenerator = ({deck}: DeckProps) => {

    const {getRandomCardIndex, getCardTitle, getCardColor, getCardImage} = deck;

    return (
        <ThemeProvider theme={theme}>
            <br/>
            <div>card</div>
            {/*<div style={{*/}
            {/*    display: 'flex', flexDirection: 'column', border: `5px solid ${theme.black}`, borderRadius: 5,*/}
            {/*    alignItems: 'center', boxShadow: `${theme.bs}`, padding: 12, margin: 4,*/}
            {/*    backgroundColor: `${getCardColor(chosenCardIndex)}`, width: deck.width, height: deck.height*/}
            {/*}}>*/}
            {/*    <div style={{justifyContent: 'center', alignItems: 'center'}}>*/}
            {/*        <p>{getCardTitle(chosenCardIndex)}</p>*/}
            {/*        <img width={deck.imageWidth} src={getCardImage(chosenCardIndex)} className="image" alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </ThemeProvider>
    )
}

export default CardGenerator;