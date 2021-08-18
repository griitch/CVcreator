/* eslint-disable react/prop-types */
import { Component } from "react";
import React from "react";
//import uniqid from 'uniqid';
import { capitalize } from "./App";

export default class WorkList extends Component {

    constructor(props) {
        super(props);
        this.removeWork = this.removeWork.bind(this);
    }


    removeWork( e ) {
        this.props.removeWork( e.target.dataset.workid )
    }
    
    render() {
    
        return (    
        this.props.work.length > 0 && <ul className="list-group list-group mb-2">
            { this.props.work.map(
                work => <li key = {work.id} className="list-group-item myListItem ">
                    {`${capitalize(work.role)} at ${capitalize(work.companyName)} `}
                    <button  
                    data-workid = { work.id }
                    onClick = { this.removeWork }
                    className='btn btn-sm  btn-danger me-1 myListItemButton' >remove</button>
                </li>
            )}
        </ul>
        );
    }
}