import { Component } from "react";
import React from "react";
import uniqid from 'uniqid';

export default class EducationList extends Component {

    
    render() {
        let dummyEducations = [
            {
                name: "diplome d'ing",
                issued: "ensa agadir",
                date : "02/01/2022"
            },
            {
                name: "brevet technicien",
                issued: "ensa agadir",
                date : "02/01/2022"
            }
        ];
        return (    
        <ul className="list-group list-group mb-2">
            <h5>Education : </h5>
            {dummyEducations.map(
                deg => <li key = {uniqid()} className="list-group-item myListItem ">{deg.name}
                    <button  className='btn btn-danger me-1 myListItemButton' >remove</button>
                    <button  className='btn btn-secondary' >edit</button>
                </li>
            )}
        </ul>
        );
    }
}