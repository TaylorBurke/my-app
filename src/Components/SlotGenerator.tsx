import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Slot} from "../interface/Template/Slot";

type SlotProps = {
    slot: Slot,
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


const SlotGenerator = ({slot}: SlotProps) => {

    const {number} = slot;
    return (
        <ThemeProvider theme={theme}>
            <br/>
            <StyledPage>
                <p>{slot.name}</p>
                <Border>
                    <div id={`${number}`} style={{display: 'flex', flexDirection: 'column',
                        alignItems: 'center', boxShadow: `${theme.bs}`, padding: 12, margin: 4}}>
                        <div style={{justifyContent: 'center', alignItems: 'center', width: 200, height: 300}}>
                        </div>
                        {/*<p>By: {artist}</p>*/}
                    </div>
                </Border>
                {/*<p>{getCardDescription(chosenCardIndex)}</p>*/}
            </StyledPage>
        </ThemeProvider>
    )
}

export default SlotGenerator;