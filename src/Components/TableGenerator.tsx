import React from 'react';
import {Deck} from "../interface/Deck/Deck";
import { ThemeProvider } from 'styled-components';
import CardGenerator from './CardGenerator';
import { fourDirectionsDeck } from '../decks/fourDirections/fourDirectionsDeck';
import { iChingDeck } from '../decks/iChing/iChingDeck';
import {connect} from 'react-redux';
import {getTableState} from "../redux/tableReducer";
import {RootState} from "../interface/RootState";
import {TableState} from "../interface/Table/TableState";
import SlotGenerator from "./SlotGenerator";


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.05)',
  };


const TableGenerator = (props : TableState) => {
// need a helper function to implement the template

    const initializeTable = () => {
        // get the template and create a "blank" for each slot


    }

    return (
        <ThemeProvider theme={theme}>

            {/*read the store and then dynamically generate the layout*/}


            {props.selectedTemplate.templateState.slots.map((s)=> (<SlotGenerator slot={s} />))}
            {props.selectedDecks.map((deck)=>{
                return <CardGenerator  deck={deck}/>
            }) }

        </ThemeProvider>
    )
}

function mapStateToProps(state : RootState) {
    const {
        selectedDecks,
        selectedTemplate,
        isClean
    } = getTableState(state);
    return {
        selectedDecks,
        selectedTemplate,
        isClean
    };
}

export const connectedTableGenerator = connect(mapStateToProps)(TableGenerator)

export default connectedTableGenerator;