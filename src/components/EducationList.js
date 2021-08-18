/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";

export default class EducationList extends Component {

    constructor(props) {
        super(props);
        this.removeEducation = this.removeEducation.bind(this);
    }

    removeEducation( e ) {
       this.props.removeEducation(e.target.dataset.id);
    }
    

    
    render() {
        
        return (    
            this.props.education.length > 0 && <ul className="list-group list-group mb-2">
            {
                this.props.education.map(
                deg => <li key = {deg.id} className="list-group-item myListItem ">{deg.degree}
                    <button
                    data-id = {deg.id}
                    onClick = { this.removeEducation }
                    className='btn btn-sm btn-danger me-1 myListItemButton' >remove</button>
                </li>
            )}
        </ul>
        );  
    }
}