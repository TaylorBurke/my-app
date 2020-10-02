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

const reduceAlpha = (color: string): string => {
    let arr = Array.from(color);
    if (arr[arr.length -2] === "1"){
        arr.splice(arr.length - 2, 1, ".5");
    }
    return arr.join("");
}

const increaseAlpha = (color: string): string => {
    let arr = Array.from(color);
    if (arr[arr.length -2] === "5"){
        arr.splice(arr.length - 3, 2, "1");
    }
    return arr.join("");
}

const CardGenerator = ({props}: CardProps) => {

    const [details, setDetails] = useState("");
    const [color, setColor] = useState(props.card?.color);

    const onHover = () => {
        if (color){
            setColor(reduceAlpha(color))
        }
    }
    const onOut = () => {
        if (color){
            setColor(increaseAlpha(color))
        }
    }

    const expandDetails = () => {
        if (props.card?.details) {
            setDetails(props.card.details);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <DetailGenerator details={details}/>
            {/*to be more adaptive the deets component should be part of slot, so we will need a redux action*/}
            <div style={{
                display: 'flex', flexDirection: 'column', border: `5px solid ${theme.black}`, borderRadius: 5,
                alignItems: 'center', boxShadow: `${theme.bs}`,
                backgroundColor: color, width: props.deck?.width, height: props.deck?.height
            }}>
                <div onMouseEnter={()=>onHover()} onMouseLeave={()=>onOut()} style={{justifyContent: 'center', alignItems: 'center'}}>
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