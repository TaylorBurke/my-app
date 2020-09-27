import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Card} from "../interface/Deck/Card";
import {DeckInterface} from "../interface/Deck/DeckInterface";

type CardProps = {
    props: {
        deck?: DeckInterface,
        card?: Card
    }
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


const CardGenerator = ({props}: CardProps) => {


    return (
        <ThemeProvider theme={theme}>
            <div style={{
                display: 'flex', flexDirection: 'column', border: `5px solid ${theme.black}`, borderRadius: 5,
                alignItems: 'center', boxShadow: `${theme.bs}`,
                backgroundColor: props.card?.color, width: props.deck?.width, height: props.deck?.height
            }}>
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    <p>{props.card?.title}</p>
                    <img width={props.deck?.imageWidth} src={props.card?.image} className="image" alt=""/>
                    <p style={{fontSize: 12}}>{props.card?.description}</p>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default CardGenerator;