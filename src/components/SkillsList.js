import { Component } from "react";
import React from "react";
/* eslint-disable react/prop-types */

import uniqid from 'uniqid';

export default class SkillsList extends Component {

    
    render() {
    
        return (    
            this.props.skills.length > 0 && <ul className="list-group list-group mb-2">
             <h5>Skills : </h5>
            { this.props.skills.map(
                skill => <li key = {uniqid()} className="list-group-item myListItem ">{skill}
                    <button  className='btn btn-sm btn-danger me-1 myListItemButton' >remove</button>
                    <button  className='btn btn-sm btn-secondary' >edit</button>
                </li>
            )}
        </ul>
        );  
    }
}