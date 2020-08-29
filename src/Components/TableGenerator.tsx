import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardGenerator from './CardGenerator';
import {connect} from 'react-redux';
import {getTableState} from "../redux/tableReducer";
import {RootState} from "../interface/RootState";
import {TableState} from "../interface/Table/TableState";
import SlotGenerator from "./SlotGenerator";
import DeckPresenter from "./DeckPresenter";


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

    const {stagedDeck, selectedDecks} = props;

    const initializeTable = () => {
        // get the template and create a "blank" for each slot

    }

    return (
        <ThemeProvider theme={theme}>

            {/*read the store and then dynamically generate the layout*/}
            {/*{props.selectedDecks.map(d=>(<DeckGenerator deck={d}/>))}*/}
            <DeckPresenter stagedDeck={stagedDeck.name} selectedDecks={selectedDecks} />
            {props.selectedTemplate.templateState.slots.map((s)=> (<SlotGenerator slot={s} />))}
            {props.selectedDecks.map((deck)=> {
                return <CardGenerator deck={deck}/>
            })}

        </ThemeProvider>
    )
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

export const connectedTableGenerator = connect(mapStateToProps)(TableGenerator)

export default connectedTableGenerator;