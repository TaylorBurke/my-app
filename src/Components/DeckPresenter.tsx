import DeckGenerator from "./DeckGenerator";
import React from "react";
import {Deck} from "../interface/Deck/Deck";

type DeckPresenterProps = {
    selectedDecks: Deck[];
    stagedDeck: string;
}

const DeckPresenter = ({selectedDecks, stagedDeck} : DeckPresenterProps) => {

    const handleClick = (deck : Deck) => {
        // dispatch action to make the deck staged
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {selectedDecks.map(d=>{
                return (
                    <div onClick={(e)=>handleClick(d)}>
                        <DeckGenerator isStaged={stagedDeck == d.name} deck={d}/>
                    </div>
                    )})
            }
        </div>
    )
}

export default DeckPresenter;