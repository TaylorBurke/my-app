import React from "react";
import {RootState} from "../interface/RootState";
import {getTableState} from "../redux/tableReducer";
import {createTemplate, selectTemplate} from "../interface/Actions/ActionCreators";
import {connect} from "react-redux";
import {Action} from "redux";
import {Template} from "../interface/Template/defaultTemplate";

type TemplateManagerProps = {
    allTemplates: Template[];
    selectedTemplate: Template;
    createTemplate: any;
    selectTemplate: any;
}



const TemplateManager = ({allTemplates, selectedTemplate, createTemplate, selectTemplate}: TemplateManagerProps) => {

    const generateSelectButton = (t: Template) => {

            if (t == selectedTemplate){
                return (
                    <div
                    className="selectedButton">
                    {t.name}
                </div>)
            } else {
                    return (
                        <div
                            onClick={()=>selectTemplate(t)}
                            className="cleanButton">
                            {t.name}
                        </div>
                    )
                }
            }


    return (
            <div>
                Create New Template:
                <div className="cleanButton">New Template</div>
                <div>Select Template:</div>
                {allTemplates.map((t)=>(generateSelectButton(t)))}

            </div>
    )
}


interface ConnectedDispatch {
    createTemplate: (t: Template) => Action;
    selectTemplate: (t: Template) => Action;
}

function mapStateToProps(state : RootState) {
    const {
        allTemplates,
        selectedTemplate,
    } = getTableState(state);
    return {
        allTemplates,
        selectedTemplate,
    };
}

const mapDispatchToProps = (dispatch: any) : ConnectedDispatch => {
    return {
        selectTemplate: (t: Template) => dispatch(selectTemplate(t)),
        createTemplate: (t: Template) => dispatch(createTemplate(t))
    }
}

export const connectedTemplateManager = connect(mapStateToProps, mapDispatchToProps)(TemplateManager);

export default connectedTemplateManager;
