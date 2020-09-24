import DeckGenerator from "./DeckGenerator";
import React from "react";
import {Deck} from "../interface/Deck/Deck";
import {Action} from "redux";
import {connect} from "react-redux";
import {RootState} from "../interface/RootState";
import {getTableState} from "../redux/tableReducer";

type DeckPresenterProps = {
    props: {
        selectedDecks: Deck[],
        stagedDeck: Deck
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
    stageDeck: (deck: Deck) => Action;
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

const stageDeck = (d: Deck) => ({type: 'STAGE_DECK', payload: d})

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        stageDeck: (deck: Deck) => dispatch(stageDeck(deck))
    }
};

// map dispatch to props
const connectedDeckPresenter = connect(mapStateToProps, mapDispatchToProps)(DeckPresenter);
export default connectedDeckPresenter;