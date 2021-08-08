/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import FormsContainer from "./FormsContainer";
import Preview from "./Preview";
import "../styles/MainContent.css";

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.updateInfos = this.updateInfos.bind(this);
    this.addWork = this.addWork.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.state = {
      infos: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
      },
      education: [],
      skills: [],
      work: [],
    };
  }

  updateInfos(info) {
    this.setState({
      infos: {
        firstName: info.firstName,
        lastName: info.lastName,
        dateOfBirth: info.dateOfBirth,
        address: info.dateOfBirth,
      },
    });
  }

  addEducation( edu ) {
    this.setState( prevState => {
      return {
      education : [...prevState.education,edu] 
    }})
  }
  addWork( work ) {
    this.setState( prevState => {
      return {
      work : [...prevState.work, work] 
    }})
    
  }
  addSkill( skill ) {
    this.setState( prevState => {
      return {
      skills : [...prevState.skills,skill] 
    }})
    
  }

  render() {
    return (
      <div className=" mt-5 container">
        <div className="row">
          <FormsContainer
            onInfoChange = { this.updateInfos }
            onEducationAdd = { this.addEducation }
            education = { this.state.education }

            onSkillsAdd = { this.addSkill }
            skills = { this.state.skills }

            onWorkAdd = { this.addWork }
            work = { this.state.work }
          />
          <Preview 
            info = {this.state.infos }
            education = { this.state.education }
            skills = { this.state.skills }
            work = { this.state.work }
          />
        </div>
      </div>
    );
  }
}
