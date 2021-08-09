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
    this.removeSkill = this.removeSkill.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeWork = this.removeWork.bind(this);

    this.state = {
      infos: {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: ""
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
        email: info.email,
        address: info.dateOfBirth,
        phone: info.phone
      },
    });
  }

  addEducation( edu ) {
    for(let education of this.state.education)
      if( education.degree === edu.degree &&
          education.from === edu.from &&
          education.date === edu.date 
        ) return;



    this.setState( prevState => {
      return {
      education : [...prevState.education,edu] 
    }})
  }
  addWork( work ) {
    for(let job of this.state.work)
      if( job.companyName === work.companyName &&
          job.role === work.role &&
          job.to === work.to &&
          job.from === work.from
        ) return;


    this.setState( prevState => {
      return {
      work : [...prevState.work, work] 
    }})
    
  }
  addSkill( skill ) {
    if(this.state.skills.includes(skill))
      return;
    this.setState( prevState => {
      return {
      skills : [...prevState.skills,skill] 
    }})
    
  }

  removeSkill( skill ) {
    this.setState( prevState => {
      return {
      skills : prevState.skills.filter(( s ) => s !== skill )
    }})
  }

  removeEducation( id ) {
    this.setState( prevState => {
      return {
      education : prevState.education.filter((edu ) => edu.id !== id )
    }})
  }

  removeWork( id ) {
    
    this.setState( prevState => {
      return {
        work : prevState.work.filter(( work ) => work.id != id )
    }})
  }

  render() {
    return (
      <div className=" mt-4 container">
        <div className="row">
          <FormsContainer
            onInfoChange = { this.updateInfos }

            onEducationAdd = { this.addEducation }
            education = { this.state.education }
            removeEducation = { this.removeEducation }

            onSkillsAdd = { this.addSkill }
            skills = { this.state.skills }
            removeSkill = { this.removeSkill }

            onWorkAdd = { this.addWork }
            removeWork = { this.removeWork }
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
