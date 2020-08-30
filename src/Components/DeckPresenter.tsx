import DeckGenerator from "./DeckGenerator";
import React, {useEffect, useState} from "react";
import {Deck} from "../interface/Deck/Deck";
import {Action, Store, Dispatch} from "redux";
import {connect} from "react-redux";

type DeckPresenterProps = {
    selectedDecks: Deck[];
    stagedDeck: string;
    // dispatch: Dispatch;
}

const DeckPresenter = ({selectedDecks, stagedDeck} : DeckPresenterProps) => {

    const handleClick = (deck : Deck) => {
        alert("D")
    }

    const [padding, setPadding] = useState(22);

    useEffect(()=>{
alert(`${padding}`)
    }, [padding])

    let hoverToggle = false;
    const onHover = () => {
        setPadding(padding+1)
    }



    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {selectedDecks.map(d=>{
                return (
                    // the hover effects need to be moved to the dg component
                    <div style={{marginTop: `${padding}`}} onMouseEnter={(e)=>onHover()} onClick={(e)=>handleClick(d)}>
                        <DeckGenerator isStaged={stagedDeck == d.name} deck={d}/>
                    </div>
                    )})
            }
        </div>
    )
}

interface ConnectedDispatch {
    stageDeck: (deck: Deck) => Action;
}

const mapDispatchToProps = (dispatch: Dispatch) : ConnectedDispatch => {
    return {
        stageDeck: (deck: Deck) => dispatch(stageDeck(deck))
    }
};

// map dispatch to props
const connectedDeckPresenter = connect(null, mapDispatchToProps)(DeckPresenter);
export default connectedDeckPresenter;