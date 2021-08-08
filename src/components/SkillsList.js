import { Component } from "react";
import React from "react";
import uniqid from 'uniqid';

export default class SkillsList extends Component {

    
    render() {
        let dummyEducations = [ "siba7a", "c plus plus"];
        return (    
        <ul className="list-group list-group mb-2">
            <h5>Skills : </h5>
            {dummyEducations.map(
                deg => <li key = {uniqid()} className="list-group-item myListItem ">{deg}
                    <button  className='btn btn-danger me-1 myListItemButton' >remove</button>
                    <button  className='btn btn-secondary' >edit</button>
                </li>
            )}
        </ul>
        );
    }
}