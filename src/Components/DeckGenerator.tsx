import React from 'react';
import {DeckInterface} from "../interface/Deck/DeckInterface";
import styled, {ThemeProvider} from 'styled-components';

type DeckProps = {
    deck: DeckInterface,
    isStaged: boolean,
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


const DeckGenerator = ({deck, isStaged}: DeckProps) => {

    const boxShadow = isStaged ? theme.bs : '0 2px 4px 0 rgba(0, 0, 0, 0.5)';

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                alignItems: 'center',
                boxShadow: `${boxShadow}`,
                padding: 5,
                margin: 43,
                backgroundColor: `${theme.black}`
            }}>
                <div style={{
                    backgroundColor: `${deck.color}`,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: deck.width / 2,
                    height: deck.height / 2
                }}>
                    <p style={{fontSize: "70%"}}>{deck.name}</p>
                </div>
            </div>


        </ThemeProvider>
    )
}

export default DeckGenerator;