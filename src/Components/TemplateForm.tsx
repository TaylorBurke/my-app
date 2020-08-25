import {AppState} from "../interface/AppState";
import React from "react";

const TemplateForm = (state: AppState) => {

    return (
        <div>
            <input type="text" id="name" name="name" placeholder="Template Name" required maxLength={40}/>
            <input type="number" id="number" name="number" placeholder="Number of Cards" required max={5}/>
            {/*{} map a new input field for each card expected*/}
        </div>
    )
}

export default  TemplateForm;