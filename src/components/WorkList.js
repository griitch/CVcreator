/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
import uniqid from 'uniqid';
import { capitalize } from "./App";

export default class WorkList extends Component {
    
    render() {
    
        return (    
        this.props.work.length > 0 && <ul className="list-group list-group mb-2">
            <h5>Work experience : </h5>
            { this.props.work.map(
                work => <li key = {uniqid()} className="list-group-item myListItem ">
                    {`${capitalize(work.role)} at ${capitalize(work.companyName)} `}
                    <button  className='btn btn-sm  btn-danger me-1 myListItemButton' >remove</button>
                    <button  className='btn btn-sm  btn-secondary' >edit</button>
                </li>
            )}
        </ul>
        );
    }
}