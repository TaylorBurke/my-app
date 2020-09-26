import DeckGenerator from "./DeckGenerator";
import React from "react";
import {DeckInterface} from "../interface/Deck/DeckInterface";
import {Action} from "redux";
import {connect} from "react-redux";
import {RootState} from "../interface/RootState";
import {getTableState} from "../redux/tableReducer";

type DeckPresenterProps = {
    props: {
        selectedDecks: DeckInterface[],
        stagedDeck: DeckInterface
    }
        stageDeck: any
}

const DeckPresenter = ({props, stageDeck} : DeckPresenterProps) => {

    const {selectedDecks, stagedDeck} = props;

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {selectedDecks.map(d=>{
                return (
                    <div onClick={()=>{stageDeck(d)}}>
                        <DeckGenerator isStaged={stagedDeck === d} deck={d}/>
                    </div>

                    )})
            }
        </div>
    )
}

interface ConnectedDispatch {
    stageDeck: (deck: DeckInterface) => Action;
}

function mapStateToProps(state : RootState) {
    const {
        selectedDecks,
        stagedDeck,
    } = getTableState(state);
    return {
        selectedDecks,
        stagedDeck,
    };
}

const stageDeck = (d: DeckInterface) => ({type: 'STAGE_DECK', payload: d})

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        stageDeck: (deck: DeckInterface) => dispatch(stageDeck(deck))
    }
};

// map dispatch to props
const connectedDeckPresenter = connect(mapStateToProps, mapDispatchToProps)(DeckPresenter);
export default connectedDeckPresenter;