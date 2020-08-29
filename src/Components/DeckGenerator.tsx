import React from 'react';
import {Deck} from "../interface/Deck/Deck";
import styled, { ThemeProvider } from 'styled-components';

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
  
  const StyledPage = styled.div`
    /* margin: 230; */
    background: ${props => props.theme.black};
  `;
  
  const Border = styled.div`
    /* max-width: 300px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10 auto;
    /* padding: 3; */
    background: ${theme.black};
    padding: 10;
  `;


const DeckGenerator = ({deck}: DeckProps) => {

    return (
        <ThemeProvider theme={theme}>
            <br/>
            <StyledPage>
                <Border>
                    <div style={{display: 'flex', flexDirection: 'column',
                        alignItems: 'center', boxShadow: `${theme.bs}`, padding: 12, margin: 4,
                        backgroundColor: `${deck.color}`, width: deck.width, height: deck.height}}>
                    <div style={{justifyContent: 'center', alignItems: 'center', width: deck.width/2, height: deck.height/2}}>
                        </div>
                    </div>
                </Border>
            </StyledPage>
        </ThemeProvider>
    )
}

export default DeckGenerator;