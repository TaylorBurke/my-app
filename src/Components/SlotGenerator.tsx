import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Slot} from "../interface/Template/Slot";
import {connect} from "react-redux";
import {Action} from "redux";
import {RootState} from "../interface/RootState";
import {getTableState} from "../redux/tableReducer";
import {DeckInterface} from "../interface/Deck/DeckInterface";
import CardGenerator from "./CardGenerator";
import {flipCard, pullCard} from "../interface/Actions/ActionCreators";

type SlotProps = {
    props: {
        slot: Slot,
    }
    pullCard: any
    flipCard: any
    stagedDeck: DeckInterface
    isClean: boolean
}

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
};

const SlotGenerator = ({props, pullCard, flipCard, stagedDeck, isClean}: SlotProps) => {

    const {slot} = props;
    const {number, populated, faceDown} = slot;

    const empty = (
        <div onClick={()=>{pullCard(number)}} id={`${number}`} style={{display: 'flex', flexDirection: 'column',
            alignItems: 'center', boxShadow: `${theme.bs}`, padding: 12, margin: 4}}>
            <div style={{justifyContent: 'center', alignItems: 'center', width: stagedDeck.width, height: stagedDeck.height}}>
            </div>
        </div>
    );

    const pulled = (
            <div onClick={()=>{flipCard(number)}} id={`${number}`} style={{display: 'flex', flexDirection: 'column', border: `5px solid ${theme.black}`, borderRadius: 5,
                alignItems: 'center', boxShadow: `${theme.bs}`}}>
                <div style={{justifyContent: 'center', alignItems: 'center', backgroundColor: slot.deck?.color, width: slot.deck?.width, height: slot.deck?.height}}>
                </div>
            </div>
        );


    const flipped = (
        <CardGenerator props={{card: slot.card, deck: slot.deck}}/>
    );

    return (
        <ThemeProvider theme={theme}>
            <br/>
                <p>{slot.name}</p>
            {
                populated && faceDown ?
                pulled :
                populated ?
                    flipped :
                    empty
            }
        </ThemeProvider>
    )
}

interface ConnectedDispatch {
    pullCard: (slotNumber: number) => Action;
    flipCard: (slotNumber: number) => Action;
}

function mapStateToProps(state : RootState) {
    const {
        selectedDecks,
        selectedTemplate,
        isClean,
        stagedDeck,
    } = getTableState(state);
    return {
        selectedDecks,
        selectedTemplate,
        isClean,
        stagedDeck,
    };
}


const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        pullCard: (slotNumber: number)=> dispatch(pullCard(slotNumber)),
        flipCard: (slotNumber: number)=> dispatch(flipCard(slotNumber))
    }
}

export const connectedSlotGenerator = connect(mapStateToProps, mapDispatchToProps)(SlotGenerator);

export default connectedSlotGenerator;
