import React from 'react';
import {MyContext} from "./MyProvider";



class DeckSelector extends React.Component {
    render(){
        return (
            <MyContext.Consumer>
                {(context)=> (
                    <React.Fragment>
                        {context.state.allDecks.map((e)=>{
                            return (
                                <div>
                                    <input type={"checkbox"} name={e.name}/>
                                    {e.name}
                                </div>
                            )
                        })}
                    </React.Fragment>
                )}
            </MyContext.Consumer>
        )
    }
}

export default DeckSelector;