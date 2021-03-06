import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import {connect} from 'react-redux';
import {getTableState} from "../redux/tableReducer";
import {RootState} from "../interface/RootState";
import SlotGenerator from "./SlotGenerator";
import DeckPresenter from "./DeckPresenter";
import {Action} from "redux";
import {cleanTable} from "../interface/Actions/ActionCreators";
import {Template} from "../interface/Template/defaultTemplate";
import {Deck} from "../interface/Deck/Deck";


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
    cleanTable: any;
}



const TableGenerator = ({stagedDeck, selectedDecks, selectedTemplate, isClean, cleanTable} : TableGeneratorProps) => {

    const [color, setColor] = useState(theme.lightgrey);
    const [shadow, setShadow] = useState(theme.bs);

    const hoverEffect = () => {
        setColor("white");
        setShadow("0 2px 10px 2px #EDEDED");
    }
    const outEffect = () => {
        setColor(theme.lightgrey);
        setShadow(theme.bs);
    }

    return (
        <ThemeProvider theme={theme}>
            <DeckPresenter props={{selectedDecks, stagedDeck}} />
            <div className='cleanButton'
                 onMouseEnter={()=>hoverEffect()}
                 onMouseLeave={()=>outEffect()}
                 style={{backgroundColor: theme.grey, color: color, boxShadow: shadow}}
                 onClick={()=>{cleanTable()}}>Clean Table</div>
            {selectedTemplate.slots.map((s)=> (<SlotGenerator props={{slot: s}} />))}
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


const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        cleanTable: ()=> dispatch(cleanTable())
    }
}

export const connectedTableGenerator = connect(mapStateToProps, mapDispatchToProps)(TableGenerator);

export default connectedTableGenerator;