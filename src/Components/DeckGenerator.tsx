import React from 'react';
import {Deck} from "../interface/Deck/Deck";
import styled, { ThemeProvider } from 'styled-components';

type DeckProps = {
    deck: Deck,
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
  
  const StyledPage = styled.div`
    /* margin: 230; */
  `;
  
  const Border = styled.div`
    /* max-width: 300px; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10 auto;
    /* padding: 3; */
    padding: 10;
  `;


const DeckGenerator = ({deck, isStaged}: DeckProps) => {

    const boxShadow = isStaged ? theme.bs : "";

    return (
        <ThemeProvider theme={theme}>
            <br/>
            <StyledPage>
                <div style={{height: 80}}/>
                <Border>
                    <div style={{display: 'flex', flexDirection: 'column',
                        alignItems: 'center', boxShadow: `${boxShadow}`, padding: 6, margin: 43, backgroundColor: `${theme.black}`
                        }}>
                    <div style={{backgroundColor: `${deck.color}`, justifyContent: 'center', alignItems: 'center', width: deck.width/2, height: deck.height/2}}>
                        </div>
                    </div>
                </Border>
            </StyledPage>
        </ThemeProvider>
    )
}

export default DeckGenerator;