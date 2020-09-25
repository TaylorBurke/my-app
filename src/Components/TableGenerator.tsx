import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardGenerator from './CardGenerator';
import {connect} from 'react-redux';
import {getTableState} from "../redux/tableReducer";
import {RootState} from "../interface/RootState";
import SlotGenerator from "./SlotGenerator";
import DeckPresenter from "./DeckPresenter";
import {Deck} from "../interface/Deck/Deck";
import {Template} from "../interface/Template/Template";
import {Action} from "redux";


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.05)',
  };

type TableGeneratorProps = {
    selectedDecks: Deck[];
    stagedDeck: Deck;
    selectedTemplate: Template;
    isClean: boolean;
}


const TableGenerator = (props : TableGeneratorProps) => {
// need a helper function to implement the template

    const {stagedDeck, selectedDecks, selectedTemplate} = props;

    return (
        <ThemeProvider theme={theme}>

            <DeckPresenter props={{selectedDecks, stagedDeck}} />
            {/*<div onClick={()=>{cleanTable()}}>Clean Table</div>*/}
            {selectedTemplate.templateState.slots.map((s)=> (<SlotGenerator props={{slot: s}} />))}
            {selectedDecks.map((deck)=> {
                return <CardGenerator deck={deck}/>
            })}

        </ThemeProvider>
    )
}

interface ConnectedDispatch {
    cleanTable: () => Action;
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

const cleanTable = () => ({type: 'CLEAN_TABLE'});

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        cleanTable: ()=> dispatch(cleanTable())
    }
}

export const connectedTableGenerator = connect(mapStateToProps, mapDispatchToProps)(TableGenerator);

export default connectedTableGenerator;