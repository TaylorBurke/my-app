import React from 'react';
import {Deck} from "./Deck";
import styled, { ThemeProvider } from 'styled-components';

type DeckProps = {
    deck: Deck,
    artist: String,
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

const DeckSelector = () => {

        // the idea of this component is 
        // you select which decks to use

        // in a future component (template creator) you title each slot and 
        // choose which deck to draw from, or use any deck at random
    return (
        <ThemeProvider theme={theme}>
            <div>
                [ ] map all the decks
            </div>
        </ThemeProvider>
    )
}

export default DeckSelector;