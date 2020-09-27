import React from 'react';
import {AppState} from "../interface/AppState";
import {RootState} from "../interface/RootState";
import {connect} from "react-redux";
import {getAppState} from "../redux/rootReducer";


const DeckSelector = (props : AppState) => {

    const handleChange = () => {}

    return (
        <div>
            {props.decks.map((e)=> {
                return (
                    <div>
                        <input onChange={() => handleChange()} type={"checkbox"} name={e.name}/>
                        {e.name}
                    </div>
                )
            } )}
        </div>
    )

}

// function mapDispatchToProps (dispatch){
//     return {
//         selectDeck: () => {
//             dispatch(selectDeck())
//         }
//     }
// }

function mapStateToProps(state : RootState) {
    const {
        templates,
        decks
    } = getAppState(state);
    return {
        templates,
        decks
    };
}

// export const connectedDeckSelector = connect(mapStateToProps, mapDispatchToProps)(DeckSelector)
export const connectedDeckSelector = connect(mapStateToProps)(DeckSelector)

export default connectedDeckSelector;
