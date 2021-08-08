/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from 'uniqid';

export default class EducationList extends Component {

    

    
    render() {
        
        return (    
            this.props.education.length > 0 && <ul className="list-group list-group mb-2">
             <h5>Education : </h5>
            {
                this.props.education.map(
                deg => <li key = {uniqid()} className="list-group-item myListItem ">{deg.degree}
                    <button  className='btn btn-sm btn-danger me-1 myListItemButton' >remove</button>
                    <button  className='btn btn-sm btn-secondary' >edit</button>
                </li>
            )}
        </ul>
        );  
    }
}