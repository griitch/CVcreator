/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import WorkForm from "./WorkForm";
import WorkList from "./WorkList";
 import EducationList from "./EducationList";
import SkillsList from './SkillsList';
//import '../styles/FormsContainer.css'

export default class FormsContainer extends Component {
  
  render() {
    
    return (
      <div className="FormsContainer col-md-4">
        <BasicInfoForm  onInfoChange = { this.props.onInfoChange }  />

        <EducationList
        education = {this.props.education } />

        <EducationForm
          onEducationAdd = { this.props.onEducationAdd }
        />

        <SkillsList
          skills = { this.props.skills }
        />
        <SkillsForm 
          onSkillsAdd = { this.props.onSkillsAdd }
        />
        <WorkList
          work = { this.props.work }
        />
        <WorkForm 
          onWorkAdd = { this.props.onWorkAdd }
        />
      </div>
    );
  }
}
