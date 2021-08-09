import { Component } from "react";
import React from "react";
/* eslint-disable react/prop-types */

import uniqid from 'uniqid';

export default class SkillsList extends Component {
    constructor(props) {
        super(props);
        this.removeSkill = this.removeSkill.bind(this);
    }

    removeSkill( e ) {
       this.props.removeSkill(e.target.dataset.skillname)
    }

   
    render() {
    
        return (    
            this.props.skills.length > 0 && <ul className="list-group list-group mb-2">
             <h5>Skills : </h5>
            { this.props.skills.map(
                skill => <li key = {uniqid()} className="list-group-item myListItem ">{skill}
                    <button data-skillname = {skill}
                      onClick = { this.removeSkill }
                      className='btn btn-sm btn-danger me-1 myListItemButton' >remove</button>
                </li>
            )}
        </ul>
        );  
    }
}