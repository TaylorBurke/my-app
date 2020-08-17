import React from 'react';
import {Deck} from "../interface/Deck";
import { ThemeProvider } from 'styled-components';
import CardGenerator from './CardGenerator';
import { fourDirectionsDeck } from '../decks/fourDirections/fourDirectionsDeck';
import { iChingDeck } from '../decks/iChing/iChingDeck';

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
  

const TableGenerator = ({deck, artist}: DeckProps) => {

    return (
        <ThemeProvider theme={theme}>
            <CardGenerator  deck={fourDirectionsDeck} artist={"Twillyb"} />
            <CardGenerator deck={iChingDeck} artist={"Zhou yi"} />
        </ThemeProvider>
    )
}

export default TableGenerator;