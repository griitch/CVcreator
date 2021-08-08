/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import EducationForm from "./EducationForm";
import SkillsForm from './SkillsForm';
import WorkForm from './WorkForm';
// import EducationList from "./EducationList";
// import SkillsList from './SkillsList';
//import '../styles/FormsContainer.css'

export default class FormsContainer extends Component {

    render() {
        return (    
            <div className = "FormsContainer col-md-4"  >
                <BasicInfoForm />
                {/* <EducationList /> */}
                <EducationForm />
                {/* <SkillsList/> */}
                <SkillsForm />
                <WorkForm />
            </div>
        );
    }
}