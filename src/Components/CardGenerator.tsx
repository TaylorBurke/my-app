import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {Card} from "../interface/Deck/Card";
import {Deck} from "../interface/Deck/Deck";
import DetailGenerator from "./DetailGenerator";

type CardProps = {
    props: {
        deck?: Deck,
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

    const [details, setDetails] = useState("");

    const expandDetails = () => {
        if (props.card?.description) {
            setDetails(props.card?.details);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <DetailGenerator details={details}/>
            {/*to be more adaptive the deets component should be part of slot, so we will need a redux action*/}
            <div style={{
                display: 'flex', flexDirection: 'column', border: `5px solid ${theme.black}`, borderRadius: 5,
                alignItems: 'center', boxShadow: `${theme.bs}`,
                backgroundColor: props.card?.color, width: props.deck?.width, height: props.deck?.height
            }}>
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                    <p>{props.card?.title}</p>
                    <img width={props.deck?.imageWidth} src={props.card?.image} className="image" alt=""/>
                    <br/>
                    <br/>
                    <div
                        onClick={()=>expandDetails()}
                        style={{fontSize: 12}}>{props.card?.description}</div>
                </div>
            </div>

        </ThemeProvider>
    )
}

export default CardGenerator;