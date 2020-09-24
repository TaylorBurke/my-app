import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Slot} from "../interface/Template/Slot";
import {connect} from "react-redux";
import {Action} from "redux";
import {RootState} from "../interface/RootState";
import {getTableState} from "../redux/tableReducer";

type SlotProps = {
    props: {
        slot: Slot,
    }
    pullCard: any
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

// const StyledPage = styled.div`
//     /* margin: 230; */
//     background: ${props => props.theme.black};
//   `;
//
// const Border = styled.div`
//     /* max-width: 300px; */
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     margin: 10 auto;
//     /* padding: 3; */
//     background: ${theme.black};
//     padding: 10;
//   `;


const SlotGenerator = ({props, pullCard}: SlotProps) => {

    const {slot} = props;
    const {number} = slot;

    return (
        <ThemeProvider theme={theme}>
            <br/>
                <p>{slot.name}</p>
                    <div onClick={()=>{pullCard(number)}} id={`${number}`} style={{display: 'flex', flexDirection: 'column',
                        alignItems: 'center', boxShadow: `${theme.bs}`, padding: 12, margin: 4}}>
                        <div style={{justifyContent: 'center', alignItems: 'center', width: 200, height: 300}}>
                        </div>
                    </div>
        </ThemeProvider>
    )
}

interface ConnectedDispatch {
    pullCard: (slotNumber: number) => Action;
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

// @todo doesn't seem to work
const pullCard = (slotNumber: number) => ({type: 'PULL_CARD', payload: slotNumber});

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        pullCard: (slotNumber: number)=> dispatch(pullCard(slotNumber))
    }
}

export const connectedSlotGenerator = connect(mapStateToProps, mapDispatchToProps)(SlotGenerator);

export default connectedSlotGenerator;
