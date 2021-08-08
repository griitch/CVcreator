/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import BasicInfoDisplay from './BasicInfoDisplay';
import EducationDisplay from './EducationDisplay';
import SkillsDisplay from './SkillsDisplay';
import WorkDisplay from './WorkDisplay';

export default class Preview extends Component {



    render() {
        
        return (
            <div className = "col-md-8"  >
                <h3>Output</h3>
                <div className = "container-fluid p-3" style = { { border : "2px solid black "}} >
                    <div className="row">
                        <BasicInfoDisplay
                        info = {this.props.info }
                        />
                        <EducationDisplay 
                            education = { this.props.education }
                        />
                    </div>
                    <div className="row">
                        <SkillsDisplay
                        skills = { this.props.skills } />
                        <WorkDisplay
                            work = { this.props.work }
                        />
                    </div>
                </div>
            </div>
        );
    }
}