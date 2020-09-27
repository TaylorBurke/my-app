import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardGenerator from './CardGenerator';
import {connect} from 'react-redux';
import {getTableState} from "../redux/tableReducer";
import {RootState} from "../interface/RootState";
import SlotGenerator from "./SlotGenerator";
import DeckPresenter from "./DeckPresenter";
import {DeckInterface} from "../interface/Deck/DeckInterface";
import {TemplateInterface} from "../interface/Template/TemplateInterface";
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
    selectedDecks: DeckInterface[];
    stagedDeck: DeckInterface;
    selectedTemplate: TemplateInterface;
    isClean: boolean;
    cleanTable: any;
}


const TableGenerator = ({stagedDeck, selectedDecks, selectedTemplate, isClean, cleanTable} : TableGeneratorProps) => {
// need a helper function to implement the template


    return (
        <ThemeProvider theme={theme}>
            <DeckPresenter props={{selectedDecks, stagedDeck}} />
            <div className='cleanButton'
                 onClick={()=>{cleanTable()}}>Clean Table</div>
            {selectedTemplate.templateState.slots.map((s)=> (<SlotGenerator props={{slot: s}} />))}
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